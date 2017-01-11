var lang = {
  "html": "100%",
  "css": "90%",
  "javascript": "70%",
  "php": "55%",
  "angular": "65%"
};

var multiply = 4;

$.each( lang, function( language, pourcent) {

  var delay = 700;

  setTimeout(function() {
    $('#'+language+'-pourcent').html(pourcent);
  },delay*multiply);

  multiply++;

});


$("#home").click(function() {
    $('html, body').animate({
        scrollTop: $("#homeDiv").offset().top
    }, 2000);
});
$("#skills").click(function() {
    $('html, body').animate({
        scrollTop: $("#skillsDiv").offset().top
    }, 2000);
});
$("#work").click(function() {
    $('html, body').animate({
        scrollTop: $("#workDiv").offset().top
    }, 2000);
});
$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contactDiv").offset().top
    }, 2000);
});
