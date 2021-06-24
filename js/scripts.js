// HAMBURGER MENU
function hamburgerMenu() {
    let link = document.getElementById("mobile-links");
    if (link.style.display === "block") {
        link.style.display = "none";
    } else {
        link.style.display = "block";
    }
}