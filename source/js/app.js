$(document).ready(function () {
    new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // accordion
    $('.accordion__item-trigger').click(function () {
        $(this).next('.accordion__item-content').slideToggle();
        $(this).parent().toggleClass('active');
        const replaceText = $(this).parent().hasClass('active') ? '-' : '+';
        $(this).find('.accordion__item-trigger__plus').text(replaceText);
    });

    // $('.accordion__item-trigger:first').click();

    new Swiper(".swiperNews", {
        slidesPerView: 1.3,
        spaceBetween: 1,
        loop: true,
        centeredSlides: true,
        roundLengths: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 1.5,
                spaceBetween: 1,
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 1,
            },
        },
    });
});