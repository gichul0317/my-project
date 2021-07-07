'use strict';

const { fadeIn, fadeOut, fadeToggle } = window.domFader;
const navBtn = document.querySelector('.nav-btn');
const target = document.querySelector('.menu');

navBtn.addEventListener('click', function () {
  fadeIn({
    element: target,
    fadeSpeed: 800,
  });
  fadeOut({
    element: target,
    fadeSpeed: 800,
  });
  target.classList.remove('hidden');
});
