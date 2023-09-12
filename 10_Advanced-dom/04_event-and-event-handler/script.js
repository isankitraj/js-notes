///////////////////////////////
// types of event and event handler 
////////////////////////////////
// event -  

const h1 = document.querySelector('h1');


const alertH1 = function(e){
  alert('addeventlistener: gread ! you are reading the heading :D')  // when we hover over that element it it display this promt message to the user.

  // after we listen the event, we delete it
  h1.removeEventListener('mouseenter', alertH1) // by using this we make an event to listen only once.

}

// mouseenter event is similar to hover event in css 
h1.addEventListener('mouseenter', alertH1)

setTimeout(()=> {
  h1.removeEventListener('mouseenter', 4000)
})


// addeventlistener allow us to add multiple event listener to the elemnt.
// we can actually remove event listener when we don't need it.
