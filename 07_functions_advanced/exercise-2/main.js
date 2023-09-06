"use strict";

(function () {
  const h1 = document.querySelector("h1");
  h1.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    h1.style.color = "blue";
  });
})();
