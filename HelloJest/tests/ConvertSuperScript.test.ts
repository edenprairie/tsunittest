import converter from "../src/CovertSuperScript";

describe("Covert to superscript", () => {
  it("superscript", () => {
    let input ='convert XIP'; 
    let result = converter.CovertSuperscript(input);
    console.log(converter.CovertSuperscript(input));
    expect(result).toBe('<sup>'+input+'</sup>');
  });
});
