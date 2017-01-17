var lang = {
  "html": "100%",
  "css": "90%",
  "javascript": "85%",
  "php": "70%",
  "angular": "70%"
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

// $("#home").hover(function() {
//   $(this).addClass('animated bounce');
// });
$('#home').hover(
       function(){ $(this).addClass('animated swing') },
       function(){ $(this).removeClass('animated swing') }
)
$('#work').hover(
       function(){ $(this).addClass('animated swing') },
       function(){ $(this).removeClass('animated swing') }
)
$('#skills').hover(
       function(){ $(this).addClass('animated swing') },
       function(){ $(this).removeClass('animated swing') }
)
$('#contact').hover(
       function(){ $(this).addClass('animated swing') },
       function(){ $(this).removeClass('animated swing') }
)

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
