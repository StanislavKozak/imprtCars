$(document).ready(function () {
  $(".stages--one").slick({
    arrows: false,
    infinite: false,
    asNavFor: '.stages__nav--one'
  });
  $(".stages__nav--one").slick({
    asNavFor: '.stages--one',
    slidesToShow: 9,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          arrows: false,
          infinite: false
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false
        }
      }
    ]
  });

  $(".stages--two").slick({
    arrows: false,
    infinite: false,
    asNavFor: '.stages__nav--two'
  });
  $(".stages__nav--two").slick({
    asNavFor: '.stages--two',
    slidesToShow: 5,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          arrows: false,
          infinite: false
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false
        }
      }
    ]
  });

  $(".team").slick({
    arrows: false,
    slidesToShow: 4,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          arrows: false,
          infinite: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false
        }
      }
    ]
  });
  $(".reviews").slick({
    arrows: false,
    slidesToShow: 1,
  });

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.body.classList.remove('sticky');
    } else {
      document.body.classList.add('sticky');
    }
    prevScrollpos = currentScrollPos;
  }

  $('a[href^="#"]').bind('click.smoothscroll',function (e) {
    e.preventDefault();
    var target = this.hash,
      $target = $(target);
    $('.show').removeClass('show');
    $('html, body').animate( {
      'scrollTop': $target.offset().top-80
    }, 900, 'swing');
  } );
});
