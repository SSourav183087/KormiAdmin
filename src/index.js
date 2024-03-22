// Selecting the menu icon and navigation container elements
let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

// Adding event listener to toggle navigation visibility on menu icon click
menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
});