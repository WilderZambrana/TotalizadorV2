import precioTotal from "./App";

const cantidad_input = document.querySelector("#cantidad-input");
const precio_input = document.querySelector("#precio-input");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultados");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(cantidad_input.value);
  const precio = Number.parseInt(precio_input.value);

  div.innerHTML = "<p>" + precioTotal(cantidad, precio) + "</p>";
});

