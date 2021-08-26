// SHOW MENU
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
