// setting style using js
message.style.backgroundColor = '#37383d';
message.style.width = '120%'; // these styles are set as inline styles, remember this.

/// note that we cannot read the style using .style method. we can get only the inline style using this method. we cannot get a style that is hidden inside of a class.


//but we can still get the style
// console.log(getComputedStyle(message)); // we get the object with all the style
console.log(getComputedStyle(message).color); // we get the object with all the style
console.log(getComputedStyle(message).height); // we get the height from it


message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';  // this parsefloat too that number only and added 40 and added px string


// css variables / custom properties // we can also change the css variable from javascript
document.documentElement.style.setProperty('--color-primary', 'orangered')


// Attributes // src, href, class, id all are attributes // in js we can access and change these attribute
const logo = document.querySelector('.nav__logo')
console.log(logo.alt);
console.log(logo.src); // this will give absolute url
console.log(logo.className); // returns the classname of the selected element

// only standard attribute can be read this way // we can't access logo.designer

// to read custom attribute i.e non standard attribute
// console.log(logo.designer); // this won't work
console.log(logo.getAttribute('designer'));  // now it will read the designer attribute form .nav__logo class element.


// apart from reading the value of attributes we can also set the attribute from here
logo.alt = 'Beautiful minimalist logo'
console.log(logo.alt);


// opposite of getattribute
logo.setAttribute('company', 'Bankist') // setting a new attribute to the logo class
console.log(logo.getAttribute('company')); // reading the value of new attribute


logo.getAttribute('src') // to get relative url // same is true of href link.


const link = document.querySelector('.twitter-link')
console.log(link.href); // this will return relative url
console.log(link.getAttribute('href')); // this will return absolute url


// Data attributes // they are alwaays stored in 
console.log(logo.dataset.versionNumber); // versionNumber should be in camel case // used to store the data in html code 



// classes
logo.classList.add() // to add a class 
logo.classList.remove() // to remove a class
logo.classList.toggle() // to add a class if it is not available or to remove a class if it is available to the element
logo.classList.contains() // check whether the passed class includes



// dont use
logo.className = 'jonas' // this will override all the classes // using this only one class is added.