$(document).ready(function() {

  $("#about_hector_cerrado").click(function() {
    $(this).removeAttr('style');
     $("#flecha_hector_abajo").attr("src","img/flecha_lado.png");
     $("#flecha_hector_abajo").attr("width","17px");
     $("#flecha_adrian_abajo").attr("src","img/flecha_abajo.png");
    $("#about_adrian_abierto").hide("blind", {direction: "left"}, 100);
    $("#about_adrian_cerrado").animate({height: "50%"}, 100);
    $("#about_hector_abierto").delay(200).show("blind", {direction: "left"}, 100);
    $(this).switchClass("offset-md-2", "offset-md-1", 100, "easeInOutQuad");
    $("#about_adrian_cerrado").switchClass("offset-md-2", "offset-md-1", 100, "easeInOutQuad");
  });
  $("#about_adrian_cerrado").click(function() {
    $(this).removeAttr('style');
    $("#flecha_adrian_abajo").attr("src","img/flecha_lado.png");
    $("#flecha_adrian_abajo").attr("width","17px");
    $("#flecha_hector_abajo").attr("src","img/flecha_abajo.png");
    $("#about_hector_abierto").hide("blind", {direction: "left"}, 100);
    $("#about_hector_cerrado").animate({height: "50%"}, 100);
    $("#about_adrian_abierto").delay(200).show("blind", {direction: "left"}, 100);
    $(this).switchClass("offset-md-2", "offset-md-1", 100, "easeInOutQuad");
    $("#about_hector_cerrado").switchClass("offset-md-2", "offset-md-1", 100, "easeInOutQuad");
  });

  // SMOOTH SCROLL EFFECT
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

});
