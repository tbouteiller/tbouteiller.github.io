let test = document
  .getElementById("menu-btn")
  .addEventListener("click", testing);
function testing() {
  let nav = document.getElementById("list");
  nav.classList.toggle("hidden");
}
