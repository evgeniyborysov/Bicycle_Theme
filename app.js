$('.my-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: 'slick-dots',
    autoplay: true,
    autoplaySpeed: 2000
});

$('#burger').on('click', function () {
    $('nav').toggleClass('open');
});




console.log("1");