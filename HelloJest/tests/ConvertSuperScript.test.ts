import converter from "../src/CovertSuperScript";
let input = 'convert XIP';

describe("Covert to superscript", () => {
  it("superscript", () => {
    let result = converter.CovertSuperscript(input);
    console.log(converter.CovertSuperscript(input));
    expect(result).toBe('<sup>' + input + '</sup>');
  });
});
