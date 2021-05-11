"use strict";

///////////////////////////////////////
// Modal window
const header = document.querySelector(".header");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//Selectiong Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);
document.getElementById("secrion--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

//Creating & Inserting Element
// .insertAdjacentHTML
const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = "We used cookie to improve fumctionality Improvement";
message.innerHTML =
  "We used cookie to improve fumctionality Improvement <button class = 'btn btn-close-cookie'>Got It!</button>";
header.prepend(message); //add element as a first child
// header.append(message); // add element as a last child
// header.append(message.cloneNode(true)); // create a clone of element

// header.before(message); //
// header.after(message); //

document
  .querySelector(".btn-close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });

message.style.backgroundColor = "#37383d";
message.style.width = "100%";
console.log(message.style.backgroundColor);
console.log(message.style.color); //not display because we are added in stylesheet

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

document.documentElement.style.setProperty("--color-primary", "orangered");

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", (e) => {
  const s1Cords = section1.getBoundingClientRect();
  console.log(s1Cords);
  console.log(e.target.getBoundingClientRect());
  console.log("x&y", window.pageXOffset, window.pageYOffset);
});
