document.addEventListener("DOMContentLoaded", () => {
  const productos = document.querySelectorAll(".producto");

  productos.forEach((producto, i) => {
    producto.style.opacity = 0;
    producto.style.transform = "translateY(20px)";
    setTimeout(() => {
      producto.style.transition = "all 0.6s ease";
      producto.style.opacity = 1;
      producto.style.transform = "translateY(0)";
    }, i * 200);
  });

  document.querySelectorAll(".producto button").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Gracias por tu interés. Próximamente activaremos la tienda online.");
    });
  });
});
