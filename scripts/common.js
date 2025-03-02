const hamburgerMenu = document.querySelector(".hamburger_menu");
const hanburgerNavigation = document.querySelector(".navigation_links");

const showNavigationLink = () => {
 hanburgerNavigation.classList.toggle("navigation");
};

hamburgerMenu.addEventListener("click", showNavigationLink);
