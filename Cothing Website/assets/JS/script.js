"use strict";

// Scroll top
var mybutton = document.querySelector(".btn__top");

// When the user scrolls down 20px from the top of the document, show the button
function topFunction() {
  document.documentElement.scrollTop = 0;
}

topFunction(mybutton);

//sticky
// window.onscroll = function () {
//   myFunction();
// };

// var navbar = document.querySelector(".nav");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
