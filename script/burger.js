document.addEventListener("DOMContentLoaded", function() {
  const burger = document.getElementById("burger-menu");
  const navLinks = document.querySelector("nav ul.nav-links");

  burger.addEventListener("click", function() {
    burger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
});