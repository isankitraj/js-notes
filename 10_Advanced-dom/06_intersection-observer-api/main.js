'use strict';


const boxes = document.querySelectorAll('.box');
const container = document.querySelector('.container')
const containerlastchild = document.querySelector('.box:last-child')

const showfun = function (entries) {
  entries.forEach(entry => {
    entry.target.classList.toggle('show', entry.isIntersecting);
  });
};


const observer = new IntersectionObserver(showfun);


boxes.forEach(box => {
  observer.observe(box);
});



const lastboxObserver = new IntersectionObserver(function(entries){
    const lastcard = entries[0];

    if (!lastcard.isIntersecting) {
        return
    }

    loadnewBox()
    
})

lastboxObserver.observe(containerlastchild)

const loadnewBox = function(){
    for (let i = 0; i< 40 ; i++){
        const box = document.createElement('div');
        box.textContent = 'new box'
        box.classList.add('box')
        observer.observe(box)
        container.append(box)
    }
} 