let header = () => {
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
};

let heroSlider = () => {
  console.log('test');
  $('.hero-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: '<a class="slick-prev slick-arrow" aria-label="Previous"><span class="decor decor-prev"></span></a>',
    nextArrow: '<a class="slick-next slick-arrow" aria-label="Next"><span class="decor decor-next"></span></a>',
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      }
    ]
  });
};

window.onload = () => {
  header();
  heroSlider();
};
