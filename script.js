var navbar = document.getElementById("navbar");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  navbar.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  navbar.classList.remove("active");
}
