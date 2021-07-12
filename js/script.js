'use strict';

const app = {};

app.displayNav = function () {
  const navBtn = document.querySelector('.nav-btn');
  const target = document.querySelector('.menu');
  navBtn.addEventListener('click', function () {
    target.classList.toggle('hidden');
  });
};

app.displayLoader = function () {
  const body = document.querySelector('body');
  body.addEventListener('onload', function () {
    setTimeout(app.displayPage, 2000);
  });
};

app.displayPage = function () {
  const page = document.querySelector('.page-container');
  const loader = document.querySelector('.loader-container');
  page.classList.remove('hidden');
  loader.classList.add('hidden');
};

app.init = function () {
  AOS.init();
  app.displayNav();
  app.displayLoader();
};

app.init();
