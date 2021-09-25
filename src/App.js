function precioTotal(cantidad, precio) {
  return cantidad * precio;
}

function impuesto(valor, estado) {
  let valorImpuestos = 0;
  switch (estado) {
    case 'UT':
      valorImpuestos = 0.0665;
      break;
    case 'NV':
      valorImpuestos = 0.08;
      break;
    case 'TX':
      valorImpuestos = 0.0625;
      break;
    case 'AL':
      valorImpuestos = 0.04;
      break;
    case 'CA':
      valorImpuestos = 0.0825;
      break;
    default:
      alert("No existe");
  }
  return valor * valorImpuestos;
}

function sumar(a, b) {
  return a + b;
}
export { precioTotal, impuesto, sumar };