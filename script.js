const navToggler = document.querySelector(".js-nav-toggler");
const nav = document.querySelector(".js-nav");

function navtoggle() {
  nav.classList.toggle("active");
  navToggler.classList.toggle("active");
}

navToggler.addEventListener("click", navtoggle);

document.addEventListener("click", (event) => {
  const isClickInsideNav = nav.contains(event.target);
  const isClickInsideNavToggler = navToggler.contains(event.target);
  if (
    !(isClickInsideNav || isClickInsideNavToggler) &&
    nav.classList.contains("active")
  ) {
    navtoggle();
  }
});
