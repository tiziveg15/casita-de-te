document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".descripcion")?.classList.add("visible");
  setTimeout(() => document.querySelector(".extras")?.classList.add("visible"), 500);
  setTimeout(() => document.querySelector(".ubicacion")?.classList.add("visible"), 1000);
});
document.querySelectorAll(".producto button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Gracias por tu interés. Próximamente activaremos la tienda online.");
  });
});
