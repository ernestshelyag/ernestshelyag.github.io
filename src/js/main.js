$(window).on('load', function () {
  $('#preloader').fadeOut();
});


$(function () {

    $('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top;
        $('body, html').animate({scrollTop: bl_top}, 900);
        return false
    });

    var slider = new Swiper('.portfolio__slider', {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        navigation: {
            nextEl: '.portfolio__btn-next',
            prevEl: '.portfolio__btn-prev',
        },
    });

    $('.modal-link, .portfolio__slide-link').magnificPopup({
        type: 'inline',
        preloader: false,
        removalDelay: 300,
        mainClass: 'my-mfp-animate'
    });

    var copySkypeBtn = document.querySelector('.copy-skype');
    copySkypeBtn.addEventListener('click', function(event) {
        var emailLink = document.querySelector('.copy-skype-content');
        var range = document.createRange();
        range.selectNode(emailLink);
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        $('.copy-skype').addClass('active');
    });

    var copyEmailBtn = document.querySelector('.copy');
    copyEmailBtn.addEventListener('click', function(event) {
        var emailLink = document.querySelector('.copy-content');
        var range = document.createRange();
        range.selectNode(emailLink);
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        $('.copy').addClass('active');
    });

});
