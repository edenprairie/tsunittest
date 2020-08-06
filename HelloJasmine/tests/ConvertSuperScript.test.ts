import converter from "../src/CovertSuperScript";

describe("Covert to superscript", () => {
  //let input = 'testVIP';
  it("superscript", () => {
    let input ='convert XIP'; 
    let result = converter.CovertSuperscript(input);
    console.log(converter.CovertSuperscript(input));
    expect(result).toBe('<sup>'+input+'</sup>');
  });
  
});
