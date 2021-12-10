'use strict';

const app = {};

// window.onload = app.displayLoader;

app.displayNav = function () {
  const navBtn = document.querySelector('.nav-btn');
  const target = document.querySelector('.menu');
  const overlay = document.querySelector('.overlay');
  // navBtn.addEventListener('click', function () {
  // target.classList.toggle('hidden');
  // overlay.classList.toggle('hidden');
  // });
};

app.closeByOverlay = function () {
  const overlay = document.querySelector('.overlay');
  const target = document.querySelector('.menu');
  overlay.addEventListener('click', function () {
    // console.log('clicked');
    overlay.classList.toggle('hidden');
    target.classList.toggle('hidden');
  });
};

app.displayPage = function () {
  const page = document.querySelector('.page-container');
  const loader = document.querySelector('.loader-container');
  page.classList.remove('hidden');
  loader.classList.add('hidden');
};

app.scrollPage = function () {
  const btnScroll = document.querySelector('.home__scroll-down');
  const sectionTo = document.querySelector('#about');

  btnScroll.addEventListener('click', function () {
    console.log('clicked')
    sectionTo.scrollIntoView({ behavior: 'smooth' });
  })
}

app.init = function () {
  AOS.init();
  app.displayNav();
  app.closeByOverlay();
  app.scrollPage();
};

app.init();
