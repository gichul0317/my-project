'use strict';

AOS.init();

const navBtn = document.querySelector('.nav-btn');
navBtn.addEventListener('click', function () {
  const target = document.querySelector('.menu');
  target.classList.toggle('hidden');
});
