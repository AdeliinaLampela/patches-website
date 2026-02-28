const menuButton = document.getElementById("hamburger-button");
const navLinks = document.getElementById("nav-links");

if (menuButton) {
  // check the "open" state
  menuButton.addEventListener("click", () => {
    if (navLinks.classList.contains("open")) {
      navLinks.classList.remove("open"); // Close the menu
    } else {
      navLinks.classList.add("open"); // Open the menu
    }
  });
}
