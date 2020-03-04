import Calculator from "../src/Calculator";

describe("calculate", () => {
  it("substract", () => {
    let result = Calculator.Difference(5, 2);
    expect(result).toBe(3);
  });
  it("add", () => {
    let result = Calculator.Sum(5, 2);
    expect(result).toBe(7);
  });
});
