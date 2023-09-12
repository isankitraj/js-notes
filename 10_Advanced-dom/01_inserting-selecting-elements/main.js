// selecting entire docuemnt
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// selecting a single element
const header = document.querySelector('.header');

// selecting all element
const allSections = document.querySelectorAll('.section');

console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button'); // this method returns an html collection different from nodelist which we get from queryselectorALL
// html collection = when the dom changes this html collection changes immediately which is not the case with nodelist

console.log(allButtons);

document.getElementsByClassName('btn'); // this also return html collections

// creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'We use cookies for imporvve functionality and analytics.';
message.innerHTML = `'We use cookies for imporvve functionality and analytics.'
  <button class="btn btn--close-cookie">Got it! </button>
`;

// header.prepend(message) // add first child
header.append(message); // add last child // the message is a live element living in the dom. so it cannot be present at two places at a time

// to make it visible multiple places// we first have to copy the elemetn
// header.append(message.cloneNode(true))

// header.before(message); // add the element before header element. they both will be siblins . same with after.
// header.after(message)

// deleting elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });