const burger = document.querySelector(".burger");
const nav = document.querySelector(".header__nav");
burger.addEventListener("click", (e) => {
  e.preventDefault();
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});
