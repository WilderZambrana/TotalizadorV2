import { precioTotal, impuesto, sumar, descuento } from "./App";

describe("Totalizador", () => {
  it("Deberia mostrar precio total de cantidad x precio", () => {
    expect(precioTotal(3, 2)).toEqual(6);
  });
});
describe("Totalizador", () => {
  it("Deberia mostrar monto del impuesto", () => {
    expect(impuesto(1000, "UT")).toEqual(66.5);
  });
});
describe("Totalizador", () => {
  it("Deberia mostrar monto total de cantidad x precio + el impuesto", () => {
    expect(sumar(1000, 66.5)).toEqual(1066.5);
  });
});
describe("Totalizador", () => {
  it("Deberia mostrar monto del descuento", () => {
    expect(descuento(2000)).toEqual(60);
  });
});