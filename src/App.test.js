import precioTotal from "./App";

describe("Totalizador", () => {
  it("Deberia mostrar precio total de cantidad x precio", () => {
    expect(precioTotal(3, 2)).toEqual(6);
  });
});
