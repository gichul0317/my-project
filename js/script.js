'use strict';

// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty('--vh', `${vh}px`);

// window.addEventListener('resize', () => {
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// });

// const backgroundUrl = '../assets/hero-min.png';
// let bgElement = document.querySelector('.bg');
// console.log(bgElement);
// let preloadingImg = document.createElement('img');
// preloadingImg.src = backgroundUrl;

// preloadingImg.addEventListener('load', () => {
//   setTimeout(() => {
//     bgElement.classList.add('none');
//   }, 1000);

//   preloadingImg = null;
// });

document.addEventListener('DOMContentLoaded', function () {
  const check = document.querySelector('.splide');
  if (check !== null) {
    const splide = new Splide('.splide', {
      perPage: 1,
      rewind: true,
      drag: 'free',
      autoplay: 'true',
      interval: 2000,
      pauseOnFocus: 'true',
    });
    splide.mount();
  }
});

const toggleBtn = document.querySelector('.navbar__togglebtn');
const menu = document.querySelector('.navbar__menu');
const overlay = document.querySelector('.overlay');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
  overlay.classList.toggle('show');
});

overlay.addEventListener('click', () => {
  menu.classList.toggle('show');
  overlay.classList.toggle('show');
});

(function () {
  const currentPage = window.location.pathname.split('/')[1];
  const navItems = document.querySelectorAll('.navbar__item');
  // console.log(navItems);
  // console.log(currentPage);
  if (currentPage === '') return;
  for (let i = 0; i < navItems.length; i++) {
    // console.log(navItems[i].getAttribute('href').indexOf(currentPage));
    if (navItems[i].getAttribute('href').indexOf(currentPage) !== -1) {
      navItems[i].className += ' navbar__active';
    }
  }
})();
