// // Append the menu for mobile
let menu = document.getElementById("menu");

let contact = document.getElementById("contact");
let mobMenu = document.querySelector("#mobMenus .mobMenu");
let newMenu = document.createElement("div");
let newContact = document.createElement("div");
newMenu.innerHTML = menu.innerHTML;
let left = newContact.innerHTML;
// console.log(left);

// let right = contact.innerHTML;
// console.log(right);
// let g = (newContact.innerHTML = contact.innerHTML);
// left = right;
// // console.log("hello", g);
let g = newMenu.firstElementChild;
mobMenu.appendChild(g);

mobMenu.append(newContact.firstElementChild);

// Menu Toggle Open and Close
let menuOpen = document.getElementById("menuOpen");

let menuClose = document.getElementById("menuClose");

let menuOverlay = document.getElementById("menuOverlay");
menuOpen.addEventListener("click", () => {
  mobMenu.classList.toggle("active");

  menuOverlay.classList.toggle("active");
});
menuClose.addEventListener("click", () => {
  mobMenu.classList.toggle("active");
  menuOverlay.classList.toggle("active");
});
menuOverlay.addEventListener("click", () => {
  mobMenu.classList.toggle("active");
  menuOverlay.classList.toggle("active");
});
