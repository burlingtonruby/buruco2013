$(function() {
  $("#header").delay(400).queue(function() {
    $(this).addClass("fadeIn");
  });

  $("#intro").delay(1400).queue(function() {
    $(this).addClass("fadeIn");
  });

  $("#email").delay(2400).queue(function() {
    $(this).addClass("fadeIn");
  });

  $("#footer").delay(3400).queue(function() {
    $(this).addClass("fadeIn");
  });
});
