document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const leftMenu = document.getElementById('left-side');
    const rightMenu = document.getElementById('right-side');

    if (menu && leftMenu) {
      menu.addEventListener("click", () => {
        leftMenu.classList.toggle("hidden");
        rightMenu.classList.toggle("ma")
      });
    } else {
      console.error("Menu element not found!");
    }

  });