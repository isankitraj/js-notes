// very important propert of js - bubbling and capturing

// rgb(255,255,255)

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

console.log(randomColor()); // this will return a random color.


document.querySelector('.nav__link').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor()   // this will point to the element on which event is occuring
  
  console.log('LINK', e.target, e.currentTarget); // e.target - this is where the event happenend
  // e.currenttarget is the the element to which the event listener is attached.


  // stop propogation
  e.stopPropagation();

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