let searchForm = document.querySelector('.search-form');
document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle('active');
    login.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}



// baagian keranjang
let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector("#cart-btn").onclick = () => {
    shoppingCart.classList.toggle('active');
    login.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

// usee
let login = document.querySelector('.login-form');
document.querySelector("#login-btn").onclick = () => {
    login.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

// home
let navbar = document.querySelector('.navbar');
document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle('active');
    login.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');

}

window.onscroll = () => {
    login.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}
var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,

        },
        1020: {
            slidesPerView: 3,

        },
    },
});

// review
var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,

        },
        1020: {
            slidesPerView: 3,

        },
    },
});