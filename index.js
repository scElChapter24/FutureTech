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
