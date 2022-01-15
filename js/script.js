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

app.displayNav = function () {
  // const navBtn = document.querySelector('.nav-btn');
  // const target = document.querySelector('.menu');
  // const overlay = document.querySelector('.overlay');
  // navBtn.addEventListener('click', function () {
  // target.classList.toggle('hidden');
  // overlay.classList.toggle('hidden');
  // });
};

app.displayPage = function () {

};

app.scrollPage = function () {
  const navbarMenu = document.querySelector('.navbar__menu');
  navbarMenu.addEventListener('click', (e) => {
    const target = e.target;
    const link = target.dataset.link;
    if (link === null) {
      return;
    }
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
  })
}

app.init = function () {
  // AOS.init({ disable: 'mobile' });
  app.navScroll();
  app.scrollPage();
  AOS.init();
  app.displayNav();
};

app.init();
