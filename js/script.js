$(document).ready(function() {
  $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false
  });

  var typed = new Typed(".typed", {
    strings: [
      "Software Engineer.",
      "Web Developer.",
      "Software Developer.",
      "Student."
    ],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

  var nameTopOffset = $("#myName").offset().top;
  var setName = 0;

  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 4,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      }
    }
  });

  var skillsTopOffset = $(".skillsSection").offset().top;

  $(window).scroll(function() {
    if (window.pageYOffset > nameTopOffset - $(window).height() + 100) {
      if (setName === 0) {
        var typed2 = new Typed("#myName", {
          strings: ["Amirul Ikmal"],
          typeSpeed: 80
        });
        setName = 1;
      }
    }

    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      $(".chart").easyPieChart({
        easing: "easeInOut",
        barColor: "#fff",
        trackColor: "#c0392b",
        traceColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
          $(this.el)
            .find(".percent")
            .text(Math.round(percent));
        }
      });
    }
  });
});
