(function ($) {
  $(document).ready(function () {
    // scroll spy

    $('.menu').onePageNav({
      currentClass: 'active',
      changeHash: false,
      scrollSpeed: 750,
      scrollThreshold: 0.5,
      filter: '',
      easing: 'swing',
    });
    // menu 
    $('.show-menu').click(function () {
      $('.menu').addClass("me")
      $('ul').addClass("slide")
      $('.show-menu').hide();
      $('.hide-menu').show()
    });
    $('.hide-menu').click(function () {
      $('.menu').removeClass("me")
      $('ul').removeClass("slide")
      $('.hide-menu').hide()
      $('.show-menu').show();
    });
    var typingEffect = new Typed('.change-titel', {
      strings: ["DEVELOPER", "DESIGNER", "FREELANCER"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500
    });
    // barfiller 
    $('#bar1').barfiller({
      barColor: '#FFB32F',
      duration: 3000
    });
    $('#bar2').barfiller({
      barColor: '#FFB32F',
      duration: 3000
    });
    $('#bar3').barfiller({
      barColor: '#FFB32F',
      duration: 3000
    });
    $('#bar4').barfiller({
      barColor: '#FFB32F',
      duration: 3000
    });
    $('#bar5').barfiller({
      barColor: '#FFB32F',
      duration: 3000
    });
    // cunterup

    $('.counter').counterUp({
      delay: 10,
      time: 3000
    });
    // owlCarousel
    $("#myCarousel").owlCarousel({
      items: 2,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplaySpeed: false,
      dots: false,
      nav: true,
      navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
      mouseDrag: false,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        992: {
          items: 2,
        }
      }
    });
    // isotop plugin 
    $('.item-deatiles').isotope({
      // options
      itemSelector: '.item',
      layoutMode: 'fitRows'
    });

    $('.item-menu ul li').click(function () {
      $('.item-menu ul li').removeClass('active');
      $(this).addClass('active');

      var selector = $(this).attr('data-filter');
      $('.item-deatiles').isotope({
        filter: selector
      });
      return false;
    });
    // magnificPopup
    $('.item a').magnificPopup({
      type: 'image',
      removalDelay: 300,
      gallery: {
        enabled: true
      }
    });
    /*stickynav bar */
    $('.main-header').stickynav();

    // particlesJS 

    particlesJS('home',

      {
        "particles": {
          "number": {
            "value": 200,
            "density": {
              "enable": true,
              "value_area": 500
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "squer",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true,
        "config_demo": {
          "hide_card": false,
          "background_color": "#b61924",
          "background_image": "",
          "background_position": "50% 50%",
          "background_repeat": "no-repeat",
          "background_size": "cover"
        }
      }

    );


  });
  // back to top  
  $(window).scroll(function () {
    var showAfter = 10;
    if ($(this).scrollTop() >= showAfter) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0,
    }, 800);
    return false;
  });

  // preloder 
  $(window).load(function () {
    setTimeout(function () {
      $('.loader-bg').fadeOut();
    }, 1000);
  });

})(jQuery);

// var loder = document.getElementById('pre-loder');

// window.addEventListener("load", function () {
//   loder.style.display = "none";
// })