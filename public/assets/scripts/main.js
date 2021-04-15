const open = document.querySelector(".open-menu");
const close = document.querySelector(".close-menu");
const header = document.querySelector(".header");
const contact = document.querySelector("#contact-link");

open.addEventListener("click", () => {
  header.classList.add("menu-open");
});

close.addEventListener("click", () => {
  header.classList.remove("menu-open");
});

contact.addEventListener("click", () => {
  header.classList.remove("menu-open");
});
