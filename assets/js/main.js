// carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 2,
        nav: true,
        navText: ["<img src='./assets/img/slider-menu__button.png'>","<img src='./assets/img/slider-menu__button1.png'>"],
        dots: false,
    });
});