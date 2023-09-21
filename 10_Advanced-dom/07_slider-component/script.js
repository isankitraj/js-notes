'use strict';

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

console.log(slides);
// slider.style.overflow = 'visible';

slides.forEach((s, i) => {
  s.style.paddingRight = '1rem';
  s.style.transform = `translateX(${i * 100}%)`;
});

let currSlide = 0;

btnRight.addEventListener('click', function () {
  if (currSlide === slides.length - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }

  moveSlide(currSlide);
});

btnLeft.addEventListener('click', function () {
  if (currSlide === 0) {
    currSlide = slides.length - 1;
  } else {
    currSlide--;
  }

  moveSlide(currSlide);
});


const moveSlide = function(slide){
    // move slides
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - currSlide) * 100}%)`;
  });
}

setInterval(() => {

    slides.forEach((slide) => {
        slide.style.transition = '1s'
    })
    
    
    if (currSlide === slides.length-1) {
        currSlide = 0
    } else {
        currSlide++;
    }

    moveSlide(currSlide)
}, 2500);
