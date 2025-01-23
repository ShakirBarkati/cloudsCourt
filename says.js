var testiomnialData = [
    {
        avatar:
            "./before_website_view/img/says/says_logo_1.png",
        name: "Saleem Sandha | Japan | J.P Intl & JMA Halal",
        review:
            "We have always enjoyed a high level of professionalism, continuity, stability and a customer focused approach working with CloudsCourt. They provide excellent technical skills and project management capabilities.",
    },
    {
        avatar:
            "./before_website_view/img/says/says_logo_2.png",
        name: "Syed Fareed Ahmed | U.S.A | Shahi Kulfi",
        review:
            "Excellence is earned and trust is built over time. Over 3 year period, we collaborated with CloudsCourt and we were able to save over 45% of development cost and our business complexity is resolved by 95% than before",
    },
    {
        avatar:
            "./before_website_view/img/says/says_logo_2.png",
        name: "Syed Fareed Ahmed | U.S.A | Shahi Kulfi",
        review:
            "Excellence is earned and trust is built over time. Over 3 year period, we collaborated with CloudsCourt and we were able to save over 45% of development cost and our business complexity is resolved by 95% than before",
    },
    {
        avatar:
            "./before_website_view/img/says/says_logo_2.png",
        name: "Syed Fareed Ahmed | U.S.A | Shahi Kulfi",
        review:
            "Excellence is earned and trust is built over time. Over 3 year period, we collaborated with CloudsCourt and we were able to save over 45% of development cost and our business complexity is resolved by 95% than before",
    },
    {
        avatar:
            "./before_website_view/img/says/says_logo_2.png",
        name: "Syed Fareed Ahmed | U.S.A | Shahi Kulfi",
        review:
            "Excellence is earned and trust is built over time. Over 3 year period, we collaborated with CloudsCourt and we were able to save over 45% of development cost and our business complexity is resolved by 95% than before",
    },
    {
        avatar:
            "./before_website_view/img/says/says_logo_2.png",
        name: "Syed Fareed Ahmed | U.S.A | Shahi Kulfi",
        review:
            "Excellence is earned and trust is built over time. Over 3 year period, we collaborated with CloudsCourt and we were able to save over 45% of development cost and our business complexity is resolved by 95% than before",
    },
    {
        avatar:
            "./before_website_view/img/says/says_logo_2.png",
        name: "Syed Fareed Ahmed | U.S.A | Shahi Kulfi",
        review:
            "Excellence is earned and trust is built over time. Over 3 year period, we collaborated with CloudsCourt and we were able to save over 45% of development cost and our business complexity is resolved by 95% than before",
    },

];
var slideHolder = document.querySelector("#slideHolder");
for (let i of testiomnialData)
    slideHolder.innerHTML += `<div class="swiper-slide"> <div class="ImgHolder"><img src="${i.avatar}"></div><div class="ContentHolder"><h3>${i.name}</h3><p>${i.review}</p></div></div>`;

const swiper = new Swiper("#craouselContainer", {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2.3,
    loop: true,
    spaceBetween: 30,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        depth: 800,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: { delay: 2000 },
});
window.onresize = queryResizer;
queryResizer();
function queryResizer() {
    if (window.innerWidth < 724) swiper.params.slidesPerView = 2;
    if (window.innerWidth > 501) swiper.params.slidesPerView = 2;
    if (window.innerWidth > 724) swiper.params.slidesPerView = 2.3;
    if (window.innerWidth < 501) swiper.params.slidesPerView = 1;
    swiper.update();
}
