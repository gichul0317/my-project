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
  // const homeBtn = document.querySelector('');

  // const btnScroll = document.querySelector('.home__scroll-down');
  // const sectionTo = document.querySelector('#about');

  // btnScroll.addEventListener('click', function () {
  //   console.log('clicked')
  //   sectionTo.scrollIntoView({ behavior: 'smooth' });
  // })
}

app.init = function () {
  // AOS.init({ disable: 'mobile' });
  app.navScroll();
  AOS.init();
  app.displayNav();
  app.scrollPage();
};

app.init();
