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

function sumar(valor, valorImpuesto) {
  return valor + valorImpuesto;
}

function descuento(valor) {
  let valorDescuento = 0;
  if (valor > 30000) {
    valorDescuento = 0.15;
  } else {
    if (valor > 10000) {
      valorDescuento = 0.1;
    } else {
      if (valor > 7000) {
        valorDescuento = 0.07;
      } else {
        if (valor > 3000) {
          valorDescuento = 0.05;
        } else {
          if (valor > 1000) {
            valorDescuento = 0.03
          }
        }
      }
    }
  }
  return valor * valorDescuento;
}

export { precioTotal, impuesto, sumar, descuento };