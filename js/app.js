$(function() {
  var navigation = responsiveNav("#nav");

  $("#header").delay(400).queue(function() {
    $(this).addClass("fadeIn");
  });

  $("#content").delay(1400).queue(function() {
    $(this).addClass("fadeIn");
  });
});
