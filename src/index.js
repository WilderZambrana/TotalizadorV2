import { precioTotal, impuesto } from "./App";

const cantidad_input = document.querySelector("#cantidad-input");
const precio_input = document.querySelector("#precio-input");
const estado_input = document.querySelector("#estado-input");
const form = document.querySelector("#totalizador-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(cantidad_input.value);
  const precio = Number.parseInt(precio_input.value);
  const estado = estado_input.value;

  const precioInicial = precioTotal(cantidad, precio);

  document.getElementById('cantidad').innerHTML = cantidad;
  document.getElementById('precio').innerHTML = precio;
  document.getElementById('totalCantxPrec').innerHTML = precioInicial;
  document.getElementById('impuesto').innerHTML = impuesto(precioInicial, estado);
});



