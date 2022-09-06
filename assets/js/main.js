// carousel
$(document).ready(function(){
    $(".owl-carousel-projects").owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        navText: ["<img src='./assets/img/slider-menu__button.png'>","<img src='./assets/img/slider-menu__button1.png'>"],
        dots: false,
        responsiveClass:true,
        responsive:{
            0: {
                items: 1,
            },
            768: {

            }
        }
    });
    $(".owl-carousel-rent").owlCarousel({
        dots: false,
        loop: true,
        items: 1,
        nav: true,
        navText: ["<img src='./assets/img/slider-menu__button.png'>","<img src='./assets/img/slider-menu__button1.png'>"],
    });
});

// burger/menu

const close = document.querySelector('.close'),
      open = document.querySelector('.menu'),
      overFlow = document.querySelector('.menu-inner');

open.addEventListener('click', () => {
    overFlow.style.display = 'block'
})

close.addEventListener('click', () => {
    overFlow.style.display = 'none'
})