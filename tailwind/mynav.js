const menuButton = document.querySelector("#menu-btn");
const menuList = document.querySelector("#menu-list");
menuButton.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});
