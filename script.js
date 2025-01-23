const swiperTestmonials = new Swiper('.swiper-testmonials', {
    loop: true,
    slidesPerView: 1.2,
    grabCursor: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-testmonials-next',
        prevEl: '.swiper-button-testmonials-prev',
    },
    breakpoints: {
        // when window width is >= 640px
        500: {
            slidesPerView: 1.4,
        },
        780: {
            slidesPerView: 1.8,
        },
        1300: {
            slidesPerView: 2.6,
        },
        1630: {
            slidesPerView: 3.2,
        }
    }

});