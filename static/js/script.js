$( document ).ready(function() {



    // about more
    $( ".js-about-more" ).on( "click", function() {
        $(this).parent().find(".about-hide").toggle();
    });

    // feedback more
    $( ".js-feedback-more" ).on( "click", function() {
        $(this).parent().find(".feedback-hide").toggle();

        return false;
    });

    $('.js-certificate').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        centerMode: true,
        slidesToShow: 6,
        slidesToScroll: 1
    });

    $('.js-conference').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });

    $('.js-feedback').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        prevArrow: '<div class="fa fa-chevron-circle-left"></div>',
        nextArrow: '<div class="fa fa-chevron-circle-right"></div>',
        slidesToShow: 1,
        slidesToScroll: 1
    });

});
