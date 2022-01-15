'use strict';

const app = {};

// make navbar color dark when scroll down
app.navScroll = function () {
  const navbar = document.querySelector('#navbar');
  const navbarHeight = navbar.getBoundingClientRect().height;
  // console.log(navbarHeight);
  document.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    if (window.scrollY > navbarHeight) {
      navbar.classList.add('navbar--dark');
    } else {
      navbar.classList.remove('navbar--dark');
    }
  })
}

// selector function
app.scrollSelector = function (item) {
  const scrollTo = document.querySelector(item);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

// scroll into each sections when navbar is clicked
app.scrollPage = function () {
  const navbarMenu = document.querySelector('.navbar__menu');
  navbarMenu.addEventListener('click', (e) => {
    const target = e.target;
    const link = target.dataset.link;
    if (link === null) {
      return;
    }
    app.scrollSelector(link);
  })
}

// scroll into contact section when home button is clicked 
app.scrollContact = function () {
  const btn = document.querySelector('.home__button');
  btn.addEventListener('click', () => {
    app.scrollSelector('#contact');
  })
}

// change home section's content opacity when scroll down
app.homeTransparent = function () {
  const home = document.querySelector('.home__container');
  const homeHeight = home.getBoundingClientRect().height;
  document.addEventListener('scroll', () => {
    // console.log(homeHeight);
    // console.log(1 - window.scrollY / homeHeight);
    home.style.opacity = (1 - window.scrollY / homeHeight);
  })
}

app.init = function () {
  // AOS.init({ disable: 'mobile' });
  // AOS.init();
  app.navScroll();
  app.scrollPage();
  app.scrollContact();
  app.homeTransparent();
};

app.init();
