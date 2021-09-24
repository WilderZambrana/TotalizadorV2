import precioTotal from "./App";

const cantidad_input = document.querySelector("#cantidad-input");
const precio_input = document.querySelector("#precio-input");
const form = document.querySelector("#totalizador-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(cantidad_input.value);
  const precio = Number.parseInt(precio_input.value);

  document.getElementById('cantidad').innerHTML = cantidad;
  document.getElementById('precio').innerHTML = precio;
  document.getElementById('totalCantxPrec').innerHTML = precioTotal(cantidad,precio);
});



