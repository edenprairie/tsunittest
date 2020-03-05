import converter from "../src/CovertSuperScript";
import { expect } from 'chai';

describe("Covert to superscript", () => {
  it("superscript", () => {
    let input ='convert XIP'; 
    let result = converter.CovertSuperscript(input);
    expect(result).equal('<sup>'+input+'</sup>');
  });

  it("superscript-2", () => {
    let input ='convert XIP'; 
    let result = converter.CovertSuperscript(input);
    expect(result).equal('<sup>'+input+'</sup>');
  });

});
