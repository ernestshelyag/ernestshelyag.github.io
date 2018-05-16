window.onload = () => {
  // header + sidebar
  $(window).scroll(function () {
    if ($(window).scrollTop() > 70) {
      $('.header').fadeOut();
    } else {
      $('.header').fadeIn();
    }
    if ($(window).scrollTop() > 70 && $('.sidebar').hasClass('active')) {
      $('#burger-btn').click();
    }
  });
  if ($(window).scrollTop() > 70) {
    $('.header').hide();
  }
  $('#burger-btn').click(function () {
    $('.burger__lines-block, .burger__mid-line, .sidebar, .sidebar__link').toggleClass('active');
  });
  $('.sidebar').click(function () {
    $('#burger-btn').click();
  });
  // hero slider
  $('.hero-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev slick-arrow" aria-label="Previous"><span class="decor-prev">ass</span></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow" aria-label="Next"><span class="decor-next">piss</span></button>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4
      }
    }]
  });
};
