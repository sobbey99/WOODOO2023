function onTab(event) {
  if (event.key === "Tab") {
    document.documentElement.setAttribute("data-tabbing", "true");
    window.removeEventListener("keydown", onTab);
    window.addEventListener("mousedown", onMouse);
  }
}

function onMouse() {
  document.documentElement.removeAttribute("data-tabbing");
  window.removeEventListener("mousedown", onMouse);
  window.addEventListener("keydown", onTab);
}

window.addEventListener("keydown", onTab);
