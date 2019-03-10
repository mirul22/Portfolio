$(document).ready(function() {
  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = now - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  var birthday = 279 - day;

  document.getElementById("birthday").innerHTML = birthday;

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

  var countUpNameFinished = false;
  var countUpStatsFinished = false;
  var nameTopOffset = $("#myName").offset().top;
  var skillsTopOffset = $(".skillsSection").offset().top;
  var statsTopOffset = $(".statsSection").offset().top;

  $(window).scroll(function() {
    if (
      !countUpNameFinished &&
      window.pageYOffset > nameTopOffset - $(window).height() + 200
    ) {
      var typed2 = new Typed("#myName", {
        strings: ["Amirul Ikmal"],
        typeSpeed: 200
      });
      countUpNameFinished = true;
    }

    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      $(".chart").easyPieChart({
        easing: "easeInOut",
        barColor: "#fff",
        trackColor: "#487eb0",
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

    if (
      !countUpStatsFinished &&
      window.pageYOffset > statsTopOffset - $(window).height() + 200
    ) {
      $(".counter").each(function() {
        var element = $(this);
        var endVal = parseInt(element.text());
        element.countup(endVal);
      });
      countUpStatsFinished = true;
    }
  });
});
