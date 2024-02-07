(function ($) {
    $(document).ready(function () {  
      $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
          $('.navbar__top').addClass('shrink');
        } else {
          $('.navbar__top').removeClass('shrink');
        }
      })
      
      $('.hamburger__menu').on('click', function () {
        $('.menu').toggleClass('animate');
      })

      $('.carousel__main__slider').owlCarousel({
        margin: 0, autoplay: true, nav: false, dots: true, loop: true,
        responsive: {
          0: { items: 1 },
          500: { items: 1 },
          700: { items: 1 },
          1000: { items: 1 },
          1299: { items: 1 }
        }
      })
      
    })
  })(jQuery)
  