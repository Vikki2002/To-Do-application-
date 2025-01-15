document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const leftMenu = document.getElementById('left-side');
  const rightMenu = document.getElementById('right-side');

  menu.addEventListener("click", () => {
    console.log("cccdcdc")
    leftMenu.classList.toggle("hidden");
    rightMenu.classList.toggle("ma")
  });
});