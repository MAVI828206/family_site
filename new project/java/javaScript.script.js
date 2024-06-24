function toggleMenu ()  {
    var menu =
document.getElementById("burgerMenu");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none"
    }
}