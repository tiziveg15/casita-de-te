// Acá podés agregar animaciones o interacciones más adelante
console.log("Bienvenido a Aromas de Alma");
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});