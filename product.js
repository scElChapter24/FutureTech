/*============= NAV HEADER ==============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu')
})

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu')
})

/*============= SEARCH =============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')

searchBtn.addEventListener('click', () => {
  search.classList.add('show-search')
})

searchClose.addEventListener('click', () => {
  search.classList.remove('show-search')
})

/*============= CART ==============*/
const cart = document.getElementById('cart'),
      cartBtn = document.getElementById('cart-btn'),
      cartClose = document.getElementById('cart-close')

cartBtn.addEventListener('click', () => {
  cart.classList.add('show-cart')
})

cartClose.addEventListener('click', () => {
  cart.classList.remove('show-cart')
})

/*============= LOGIN ==============*/
const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close')

loginBtn.addEventListener('click', () => {
  login.classList.add('show-login')
})

loginClose.addEventListener('click', () => {
  login.classList.remove('show-login')
})

/*============== SCROLL NAV ==============*/
let isScrolling = false;

function throttleScroll() {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      handleScroll();
      isScrolling = false;
    });
    isScrolling = true;
  }
}

function handleScroll() {
  var header = document.getElementById('header');
  if (window.scrollY > 0) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
}

window.addEventListener('scroll', throttleScroll);

/*============== SLIDERS PRODUCT ==============*/
var swiper = new Swiper(".slideratas", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*============== SLIDERS PRODUCT ==============*/
var swiper = new Swiper(".perangkat-elektronik", {
  slidesPerView:1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    280:{
      slidesPerView:1,
      spaceBetween: 10,
    },
    320:{
      slidesPerView:2,
      spaceBetween: 10,
    },
    510:{
      slidesPerView:3,
      spaceBetween: 10,
    },
    758:{
      slidesPerView:4,
      spaceBetween: 15,
    },
    900:{
      slidesPerView:5,
      spaceBetween: 20,
    }
  }
});