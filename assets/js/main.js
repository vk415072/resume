// SHOW & HIDE MENU
const showMenu = (toggledId, navId) => {
   const toggle = document.getElementById(toggledId),
      nav = document.getElementById(navId);

   // validate that variable exist
   if (toggle && nav) {
      toggle.addEventListener("click", () => {
         // add the show menu class to the div tag with the nav__menu class
         nav.classList.toggle("show-menu");
      });
   }
};
showMenu("nav-toggle", "nav-menu");

// HIDE MENU MOBILE (after item click)
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
   const navMenu = document.getElementById("nav-menu");
   // when we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));