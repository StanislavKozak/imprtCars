$(document).ready(function () {
  if (window.innerWidth < 768) {
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
            infinite: false,
          },
        },
      ],
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
    asNavFor: ".stages__nav--one",
  });
  $(".stages__nav--one").slick({
    asNavFor: ".stages--one",
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
          infinite: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          arrows: false,
          draggable: true,
          swipe: true,
          infinite: false,
        },
      },
    ],
  });

  $(".stages--two").slick({
    arrows: false,
    infinite: false,
    draggable: true,
    swipe: true,
    asNavFor: ".stages__nav--two",
  });
  $(".stages__nav--two").slick({
    asNavFor: ".stages--two",
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
          infinite: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          arrows: false,
          draggable: true,
          swipe: true,
          infinite: false,
        },
      },
    ],
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
          infinite: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: false,
          draggable: true,
          swipe: true,
          infinite: false,
        },
      },
    ],
  });
  $(".reviews-slider").slick({
    arrows: false,
    draggable: true,
    swipe: true,
    slidesToShow: 1,
  });

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.body.classList.remove("sticky");
    } else {
      document.body.classList.add("sticky");
    }
    prevScrollpos = currentScrollPos;
  };

  $('a[href^="#"]').bind("click.smoothscroll", function (e) {
    e.preventDefault();
    var target = this.hash,
      $target = $(target);
    var offset = 118;
    if (window.innerWidth < 1025) {
      offset = 98;
    }
    if (window.innerWidth < 1024) {
      offset = 58;
    }
    $(".show").removeClass("show");
    $("html, body").animate(
      {
        scrollTop: $target.offset().top - offset,
      },
      900,
      "swing",
      function () {
        setTimeout(function () {
          $("body").removeClass("sticky");
        }, 100);
      }
    );
  });

  $(".budget").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 400,
    to: 600,
    drag_interval: true,
    min_interval: null,
    max_interval: null,
    hide_min_max: true,
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
    hide_min_max: true,
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
    prettify_enabled: false,
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
    prettify_enabled: false,
  });

  $("#test_button").click((e) => {
    e.preventDefault();
    var check_target;
    if(!document.querySelector("#test__modal__form .item.active input.form-check-input")){
      if (!document.querySelector("#test__modal__form .item.active .input__wrapper > select")){
        check_target = document.querySelector("#test__modal__form .item.active .input__wrapper > input").value;
      } else {
        check_target = document.querySelector(
          "#test__modal__form .item.active .input__wrapper > select"
        ).value;
      }
    }else{
      check_target = true;
    }


    if (check_target !== undefined && check_target !== "" && check_target !== null && check_target) {

      let cuttentStep = $("#test_button").attr("data-step");
      if (cuttentStep == 7) {
        $("#test__modal").modal("hide");
        $("#callback__modal__done").modal("show");
        return;
      }

      $("#test__modal__form .item").each((item) => {
        if ($("#test__modal__form .item")[item].id.includes(cuttentStep)) {
          $("#test__modal__form .item")[item].classList.add("active");
        } else {
          $("#test__modal__form .item")[item].classList.remove("active");
        }
      });
      for (let i = 0; i <= cuttentStep; i++) {
        $(`#step-indicator-${i}`).attr("fill", "#D05216");
      }
      $(".stages--block__indicator .number .current").html(`0${cuttentStep}`);
      if (cuttentStep <= 5) {
        $("#test__modal__description-1")[0].classList.add("active");
        $("#test__modal__description-2")[0].classList.remove("active");
        $("#test_button")
          .html(`<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.4747 6.53335L17.4756 6.53432C17.508 6.57016 17.5092 6.6288 17.4747 6.66714L12.0779 12.6636C12.0539 12.6888 12.0253 12.6993 12.0003 12.6993H8.40045C8.36193 12.6993 8.32543 12.6766 8.30846 12.6387L8.30804 12.6377C8.29311 12.6045 8.29828 12.5624 8.32606 12.5314C8.32607 12.5314 8.32608 12.5314 8.3261 12.5314L13.3642 6.93415L13.6653 6.59968L13.3643 6.26518L8.32573 0.666281L8.32573 0.66628L8.32496 0.665422C8.30094 0.63886 8.29238 0.597433 8.30873 0.558863C8.32576 0.522559 8.36202 0.5 8.40045 0.5H12.0003C12.0274 0.5 12.0541 0.510767 12.0757 0.534487C12.0758 0.534601 12.0759 0.534715 12.076 0.534829L17.4747 6.53335Z" stroke="white"></path>
              <path d="M9.67488 6.53335L9.67576 6.53432C9.70819 6.57016 9.70939 6.6288 9.67488 6.66714L4.27807 12.6636C4.25413 12.6888 4.2255 12.6993 4.20045 12.6993H0.600642C0.562121 12.6993 0.525629 12.6766 0.508657 12.6387L0.508233 12.6377C0.493301 12.6045 0.498475 12.5624 0.526251 12.5314C0.526264 12.5314 0.526277 12.5314 0.526291 12.5314L5.56442 6.93415L5.86548 6.59968L5.56446 6.26518L0.525929 0.666281L0.52593 0.66628L0.525155 0.665422C0.50114 0.63886 0.49258 0.597433 0.508922 0.558862C0.525958 0.522558 0.562215 0.5 0.600642 0.5H4.20045C4.2276 0.5 4.25427 0.510769 4.27591 0.534492C4.27602 0.534604 4.27612 0.534716 4.27622 0.534829L9.67488 6.53335Z" stroke="white"></path>
            </svg>
        Далее`);

        $("#test__modal h3").html(`<span>ПРОЙДИ ТЕСТ</span><span class="mon-bold">И ПОЛУЧИ ПОДАРОК</span>`);
      } else {
        $(".stages--block__indicator").css("display", "none");
        $(".stages--block").css("justify-content", "flex-end");
        $("#test__modal__description-2")[0].classList.add("active");
        $("#test__modal__description-1")[0].classList.remove("active");
        $("#test_button")[0].innerHTML = "";
        $("#test_button")[0].innerHTML = `ПОЛУЧИТЬ ПОДАРОК`;
        $("#test__modal h3").html(`<span>ВЫ УСПЕШНО</span><span class="mon-bold">ПРОШЛИ ТЕСТ!</span>`);
      }
      $("#test_button").attr("data-step", `${parseInt(cuttentStep) + 1}`);
    }
  });

  $("form").submit((e) => {
    e.preventDefault();
    if (e.id === "test__modal__form") {
      return;
    }
    $("#callback__modal__done").modal("show");
  });

  $("#callback__modal__form").submit((e) => {
    $("#callback__modal").modal("hide");
    $("#callback__modal__done").modal("show");
    e.preventDefault();
  });
});
