
function validateForm() {
var x = document.forms["myForm"]["name"].value;
if (x == "") {
alert("Name must be filled out");
return false;
}
var x = document.forms["myForm"]["email"].value;
if (x == "") {
alert("Email Address must be filled out");
return false;
}
var x = document.forms["myForm"]["email"].value;
var atpos = x.indexOf("@");
var dotpos = x.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
alert("Not a valid e-mail address");
return false;
}
else
{
  alert("Thank you for signing up for our newsletter!\n" +
    "We will update you as sooon as new sales season starts!");
}
}

