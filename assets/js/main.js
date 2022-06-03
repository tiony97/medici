/**
 * Initiate glightbox 
 */
const glightbox = GLightbox({
    selector: '.glightbox'
});

/*
Hero Slider
*/
new Swiper('.hero-slider', {
    speed: 600,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    }
});

/**
 * Clients Slider
 */
new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
    delay: 5000,
    disableOnInteraction: false
    },
    slidesPerView: 6,
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
    },
    breakpoints: {
    320: {
        slidesPerView: 2,
        spaceBetween: 40
    },
    480: {
        slidesPerView: 3,
        spaceBetween: 60
    },
    640: {
        slidesPerView: 4,
        spaceBetween: 80
    },
    992: {
        slidesPerView: 6,
        spaceBetween: 120
    }
    }
});

/**
 * Animation on scroll
 */
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});