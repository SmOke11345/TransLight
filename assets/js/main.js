// carousel
$(document).ready(function(){
    $(".owl-carousel-projects").owlCarousel({
        loop: true,
        items: 2,
        nav: true,
        navText: ["<img src='./assets/img/slider-menu__button.png'>","<img src='./assets/img/slider-menu__button1.png'>"],
        dots: false,
    });
    $(".owl-carousel-rent").owlCarousel({
        dots: false,
        loop: true,
        items: 1,
        nav: true,
        navText: ["<img src='./assets/img/slider-menu__button.png'>","<img src='./assets/img/slider-menu__button1.png'>"],
    });
});
