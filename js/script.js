'use strict';

const app = {};

app.navScroll = function () {
  const navbar = document.querySelector('#navbar');
  const navbarHeight = navbar.getBoundingClientRect().height;
  // console.log(navbarHeight);
  document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
      navbar.classList.add('navbar--dark');
    } else {
      navbar.classList.remove('navbar--dark');
    }
  })
}

app.scrollSelector = function (item) {
  const scrollTo = document.querySelector(item);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

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

app.scrollContact = function () {
  const btn = document.querySelector('.home__button');
  btn.addEventListener('click', () => {
    app.scrollSelector('#contact');
  })
}

app.init = function () {
  // AOS.init({ disable: 'mobile' });
  // AOS.init();
  app.navScroll();
  app.scrollPage();
  app.scrollContact();
};

app.init();
