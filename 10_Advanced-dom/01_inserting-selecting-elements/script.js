'use strict';


const box = document.querySelector('.mybox');
const firstchild = document.querySelector('.firstchild')

// creating an element using javascript // this will not work with insertAdjacentHTML
const myElement = document.createElement('p') // this will create a paragraph element
myElement.textContent = 'meow meow meow';

// creating html on our own // this will work with insertAdjacentHTML
const newElement = `<p> this is the new element bro </p>` // this is an element created


box.insertAdjacentHTML('beforeend', newElement)  // Inserts the content as the last child inside the selected element.
box.insertAdjacentHTML('beforebegin', newElement) // Inserts the content immediately before the selected element.
box.insertAdjacentHTML('afterend', newElement) //  Inserts the content immediately after the selected element.
box.insertAdjacentHTML('afterbegin', newElement) //  Inserts the content as the first child inside the selected element.



// firstchild.append(myElement)
// firstchild.prepend(myElement)

const newnewel = document.createElement('p')
newnewel.textContent = 'brooooooooooooooooooooooo'
firstchild.insertAdjacentElement('afterend', newnewel)

// insertadjacentElemnt vs insertadjacentHTML
//The insertAdjacentHTML() method takes three arguments: the position of the new element relative to the existing element, a string of HTML

// The insertAdjacentElement() method takes two arguments: the position of the new element relative to the existing element, and the element to insert.

// insertAdjacentElement takes the element created by us like using object.createElement.


// most of the time we will be working with these thwo methods to insert a element in dom tree.

//The main difference between the two methods is that insertAdjacentElement() only inserts existing DOM elements, while insertAdjacentHTML() can insert either existing DOM elements or new elements created from HTML markup.
// In general, you should use insertAdjacentElement() when you want to insert an existing DOM element into another element. You should use insertAdjacentHTML() when you want to insert new elements created from HTML markup.