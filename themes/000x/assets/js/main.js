const menue = document.querySelector(".fa-bars");
const nav = document.querySelector(".navbar");
const mobileNav = document.querySelector(".mobile-nav");
const close = document.querySelector(".fa-close");

menue.addEventListener("click", () => {
  menue.style.display = "none";
  close.style.display = "block";
  mobileNav.style.display = "flex";
  nav.style.hieght = "100%";
});


close.addEventListener("click", () => {
  menue.style.display = "block";
  close.style.display = "none";
  mobileNav.style.display = "none";
  nav.style.hieght = "auto";
});