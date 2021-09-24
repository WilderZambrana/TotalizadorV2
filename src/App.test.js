import { precioTotal, impuesto } from "./App";

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