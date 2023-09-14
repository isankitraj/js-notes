'use strict';

const downArrow1 = document.querySelector('svg');
const downArrow2 = document.querySelector('.down2');
const uparrow = document.querySelector('.up');

const section1 = document.querySelector('.one');
const section2 = document.querySelector('.two');
const section3 = document.querySelector('.three');

downArrow1.addEventListener('click', function () {
  section2.scrollIntoView({ behavior: 'smooth' });
});

downArrow2.addEventListener('click', () => {
  section3.scrollIntoView({ behavior: 'smooth' });
});

uparrow.addEventListener('click', () => {
  section1.scrollIntoView({ behavior: 'smooth' });
});
