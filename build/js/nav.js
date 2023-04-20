let navIcon = document.getElementById("hamburger-icon");
let nav = document.querySelector("nav");

navIcon.addEventListener("click", () => {
  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden");
  } else {
    nav.classList.add("hidden");
  }
});
