const home = document.getElementById("home");
const nav = document.getElementById("nav");

home.addEventListener("click", () => {
  nav.classList.toggle("open");
});
