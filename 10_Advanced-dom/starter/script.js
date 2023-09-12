'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault(); // preventing default action of anchor tag
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////////////////////

// // selecting entire docuemnt
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// // selecting a single element
// const header = document.querySelector('.header');

// // selecting all element
// const allSections = document.querySelectorAll('.section');

// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button'); // this method returns an html collection different from nodelist which we get from queryselectorALL
// // html collection = when the dom changes this html collection changes immediately which is not the case with nodelist

// console.log(allButtons);

// document.getElementsByClassName('btn'); // this also return html collections

// // creating and inserting elements
// // .insertAdjacentHTML

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent =
//   'We use cookies for imporvve functionality and analytics.';
// message.innerHTML = `'We use cookies for imporvve functionality and analytics.'
//   <button class="btn btn--close-cookie">Got it! </button>
// `;

// // header.prepend(message) // add first child
// header.append(message); // add last child // the message is a live element living in the dom. so it cannot be present at two places at a time

// // to make it visible multiple places// we first have to copy the elemetn
// // header.append(message.cloneNode(true))

// // header.before(message); // add the element before header element. they both will be siblins . same with after.
// // header.after(message)

// // deleting elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// // setting style using js
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%'; // these styles are set as inline styles, remember this.

// /// note that we cannot read the style using .style method. we can get only the inline style using this method. we cannot get a style that is hidden inside of a class.

// //but we can still get the style
// // console.log(getComputedStyle(message)); // we get the object with all the style
// console.log(getComputedStyle(message).color); // we get the object with all the style
// console.log(getComputedStyle(message).height); // we get the height from it

// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';  // this parsefloat too that number only and added 40 and added px string

// // css variables / custom properties // we can also change the css variable from javascript
// document.documentElement.style.setProperty('--color-primary', 'orangered')

// // Attributes // src, href, class, id all are attributes // in js we can access and change these attribute
// const logo = document.querySelector('.nav__logo')
// console.log(logo.alt);
// console.log(logo.src); // this will give absolute url
// console.log(logo.className); // returns the classname of the selected element

// // only standard attribute can be read this way // we can't access logo.designer

// // to read custom attribute i.e non standard attribute
// // console.log(logo.designer); // this won't work
// console.log(logo.getAttribute('designer'));  // now it will read the designer attribute form .nav__logo class element.

// // apart from reading the value of attributes we can also set the attribute from here
// logo.alt = 'Beautiful minimalist logo'
// console.log(logo.alt);

// // opposite of getattribute
// logo.setAttribute('company', 'Bankist') // setting a new attribute to the logo class
// console.log(logo.getAttribute('company')); // reading the value of new attribute

// logo.getAttribute('src') // to get relative url // same is true of href link.

// const link = document.querySelector('.twitter-link')
// console.log(link.href); // this will return relative url
// console.log(link.getAttribute('href')); // this will return absolute url

// // Data attributes // they are alwaays stored in
// console.log(logo.dataset.versionNumber); // versionNumber should be in camel case // used to store the data in html code

// // classes
// logo.classList.add() // to add a class
// logo.classList.remove() // to remove a class
// logo.classList.toggle() // to add a class if it is not available or to remove a class if it is available to the element
// logo.classList.contains() // check whether the passed class includes

// // dont use
// logo.className = 'jonas' // this will override all the classes // using this only one class is added.

//////////////////////////////////////////////
// implementing smooth scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect(); // getting the coordinates
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('current scroll (x/y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width of viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // // scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // improving above scroll // old school way // manual calcualtion
  // window.scrollTo({
  //  left: s1coords.left + window.pageXOffset,
  //  top: s1coords.top + window.pageYOffset,
  //  behavior: 'smooth',
  // })

  // more modern way -  lol😂
  section1.scrollIntoView({ behavior: 'smooth' }); // this only woks in modern browser.
});

///////////////////////////////
// types of event and event handler
////////////////////////////////
// event -

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addeventlistener: gread ! you are reading the heading :D'); // when we hover over that element it it display this promt message to the user.

//   // after we listen the event, we delete it
//   h1.removeEventListener('mouseenter', alertH1); // by using this we make an event to listen only once.
// };

// // mouseenter event is similar to hover event in css
// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => {
//   h1.removeEventListener('mouseenter', 4000);
// });

// addeventlistener allow us to add multiple event listener to the elemnt.
// we can actually remove event listener when we don't need it.
//////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// very important propert of js - bubbling and capturing

// rgb(255,255,255)

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

console.log(randomColor()); // this will return a random color.


document.querySelector('.nav__link').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor()   // this will point to the element on which event is occuring
  
  console.log('LINK', e.target); // this is where the event happenend
  
})

// parent of nav link
document.querySelector('.nav__links').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor()
  console.log('LINK', e.target); // this is where the event happenend
  
})

// parent of navlinks
document.querySelector('.nav').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor()
  console.log('LINK', e.target); // this is where the event happenend
  
})