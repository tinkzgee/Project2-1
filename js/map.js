var map;
var myLocation;
var infowindow = new google.maps.InfoWindow();

function initialize() {
    //initializes map
    myLocation = new google.maps.LatLng(41.950, -87.786);
    map = new google.maps.Map(document.getElementById('canvas'), {
        center: myLocation,
        zoom: 10,
        mapTypeId: 'terrain'
    });

	// adds simple listener
    google.maps.event.addListener(map, 'click', function() {
        infowindow.close();
    });

	// adds listener that opens text window with parameters. I lost A LOT of sleep over this. 0_0
	// you better buy me a coffee if you steal this code
    map.data.addListener('click', function(event) {
        var myHTML = event.feature.getProperty("Google Maps URL");
        var myHeading = event.feature.getProperty("Business Name");
        var myBody = event.feature.getProperty("Address");
        var myURL = event.feature.getProperty("Google Maps URL");
        //formatting of Text Window
        var contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading">' +
            myHeading +
            '</h1>' +
            '<div id="bodyContent">' +
            '<p>' +
            myBody +
            '</p>' +
            '<p>' +
            'Google Maps URL: ' +
            '<a href="' +
            myURL +
            '">' +
            myURL +
            '</a> ' +
            '</p>' +
            '</div>' +
            '</div>';

        infowindow.setContent("<div style='width:250px; text-align: center;'>" + contentString + "</div>");
        infowindow.setPosition(event.feature.getGeometry().get());
        infowindow.setOptions({
            pixelOffset: new google.maps.Size(0, -30)
        });
        infowindow.open(map);
    });
	
	// loads all pins 
    map.data.addGeoJson(jsonData);
}

google.maps.event.addDomListener(window, "load", initialize);

// Data for pins is stored here. I created json file from exporting google map (places) timeline. 
// You need to manually remove "Location" property because you cannot access nested properties with the event.feature.getProperty function.
// Warning: Marketers are NOT allowed to steal this data! 

var jsonData = {
    "type": "FeatureCollection",
    "features": [{
        "geometry": {
            "coordinates": [52.229866, 21.011759],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=7420751835806571819",
            "Address": "1453 West Lake Street, Addison, IL 60101, United States",
            "Business Name": "Briki Cafe",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.9458843",
                "Longitude": "-88.0245196"
            },
            "Published": "2018-11-11T03:42:45Z",
            "Title": "Briki Cafe",
            "Updated": "2018-11-11T03:42:45Z"
        },
        "type": "Feature"
    }
};
