$(document).ready(function () {
  if(window.innerWidth < 768){
    $(".compare__container").slick({
      arrows: false,
      infinite: false,
      draggable: true,
      swipe: true,
      slidesToShow: 1,
    });
    $(".main-bottom-slider").slick({
      arrows: false,
      infinite: false,
      draggable: true,
      swipe: true,
      slidesToShow: 2,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            arrows: false,
            swipe: true,
            slidesToScroll: 2,
            draggable: true,
            infinite: false
          }
        }]
    });
    $(".videos__container").slick({
      arrows: false,
      infinite: false,
      draggable: true,
      swipe: true,
      slidesToShow: 1,
    });
  }
  $(".stages--one").slick({
    arrows: false,
    infinite: false,
    draggable: true,
    swipe: true,
    asNavFor: '.stages__nav--one'
  });
  $(".stages__nav--one").slick({
    asNavFor: '.stages--one',
    slidesToShow: 9,
    focusOnSelect: true,
    draggable: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
          arrows: false,
          draggable: true,
          swipe: true,
          infinite: false
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          arrows: false,
          draggable: true,
          swipe: true,
          infinite: false
        }
      }
    ]
  });

  $(".stages--two").slick({
    arrows: false,
    infinite: false,
    draggable: true,
    swipe: true,
    asNavFor: '.stages__nav--two'
  });
  $(".stages__nav--two").slick({
    asNavFor: '.stages--two',
    slidesToShow: 5,
    focusOnSelect: true,
    draggable: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          arrows: false,
          draggable: true,
          swipe: true,
          infinite: false
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          arrows: false,
          draggable: true,
          swipe: true,
          infinite: false
        }
      }
    ]
  });

  $(".team").slick({
    arrows: false,
    slidesToShow: 4,
    focusOnSelect: true,
    draggable: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          arrows: false,
          draggable: true,
          swipe: true,
          infinite: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: false,
          draggable: true,
          swipe: true,
          infinite: false
        }
      }
    ]
  });
  $(".reviews-slider").slick({
    arrows: false,
    draggable: true,
    swipe: true,
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
    var offset = 118;
    if(window.innerWidth < 1025){
      offset = 98;
    }
    if(window.innerWidth < 1024){
      offset = 58;
    }
    $('.show').removeClass('show');
    $('html, body').animate( {
      'scrollTop': $target.offset().top - offset
    }, 900, 'swing', function(){
      setTimeout(function () {
        $('body').removeClass('sticky');
      },100);
    });
  } );


  $(".budget").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 400,
    to: 600,
    drag_interval: true,
    min_interval: null,
    max_interval: null,
    hide_min_max: true
  });
  $(".budget--two").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 400,
    to: 600,
    drag_interval: true,
    min_interval: null,
    max_interval: null,
    hide_min_max: true
  });

  $(".year").ionRangeSlider({
    type: "double",
    min: 2000,
    max: 2020,
    from: 2010,
    to: 2016,
    drag_interval: true,
    min_interval: null,
    max_interval: null,
    hide_min_max: true,
    prettify_enabled: false
  });
  $(".year--two").ionRangeSlider({
    type: "double",
    min: 2000,
    max: 2020,
    from: 2010,
    to: 2016,
    drag_interval: true,
    min_interval: null,
    max_interval: null,
    hide_min_max: true,
    prettify_enabled: false
  });

  $("#test__modal__form" ).submit((e) => {
    e.preventDefault();

    let cuttentStep = $('#test_button').attr( "data-step" )
    if(cuttentStep == 7) {
      $('#test__modal').modal('hide')
      $('#callback__modal__done').modal('show')
      return
    }

    $("#test__modal__form .item").each(item => {
      if($("#test__modal__form .item")[item].id.includes(cuttentStep)){
        $("#test__modal__form .item")[item].classList.add("active")
      }
      else {
        $("#test__modal__form .item")[item].classList.remove("active")
      }
    })
    for(let i = 0; i <= cuttentStep; i++){
      $(`#step-indicator-${i}`).attr("fill", "#D05216")
    }
    $(".stages--block__indicator .number .current").html(`0${cuttentStep}`)
    if(cuttentStep <= 5){
      $("#test__modal__description-1")[0].classList.add("active")
      $("#test__modal__description-2")[0].classList.remove("active")
      $('#test_button').html(`<img src="./imgs/svg/next-step.svg" alt="send">
        Далее`)

      $('#test__modal h3').html(`<span>
                                            ПРОЙДИ ТЕСТ
                                        </span>
                                        <span class="mon-bold">
                                            И ПОЛУЧИ ПОДАРОК
                                        </span>`)

    }
    else {
      $(".stages--block__indicator").css("display", "none")
      $(".stages--block").css("justify-content", "flex-end")
      $("#test__modal__description-2")[0].classList.add("active")
      $("#test__modal__description-1")[0].classList.remove("active")
      $('#test_button')[0].innerHTML = ""
      $('#test_button')[0].innerHTML = `<img src="./imgs/svg/gift.svg" alt="send">
        ПОЛУЧИТЬ ПОДАРОК`
      $('#test__modal h3').html(`<span>
                                            ВЫ УСПЕШНО
                                        </span>
                                        <span class="mon-bold">
                                            ПРОШЛИ ТЕСТ!
                                        </span>`)

    }
    $('#test_button').attr( "data-step",  `${parseInt(cuttentStep)+1}` )

  });

  $("form").submit((e)=>{
    e.preventDefault();
    if(e.id === "test__modal__form"){return}
    $('#callback__modal__done').modal('show')
  });

  $("#callback__modal__form" ).submit((e) => {
    $('#callback__modal').modal('hide')
    $('#callback__modal__done').modal('show')
    e.preventDefault();
  });

});
