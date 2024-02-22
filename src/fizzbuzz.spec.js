import generateFizzBuzz from "./fizzbuzz.js";

describe("Fizzbuzz", () => {
  it("should generate the same number for one that doesn't have rules, like the 1", () => {
    expect(generateFizzBuzz(1)).toEqual("1");
  });
  it("should generate the same number for another number that doesn't have rules, like the 2", () => {
    expect(generateFizzBuzz(2)).toEqual("2");
  });
  it("should generate Fizz for another number that is multiple of 3, like the 3", () => {
    expect(generateFizzBuzz(3)).toEqual("Fizz");
  });
  it("should generate Fizz for another number that is multiple of 3, like the 6", () => {
    expect(generateFizzBuzz(6)).toEqual("Fizz");
  });
  it("should generate Buzz for a number that is multiple of 5, like the 5", () => {
    expect(generateFizzBuzz(5)).toEqual("Buzz");
  });
  it("should generate Buzz for a number that is multiply of 5, like the 10", () => {
    expect(generateFizzBuzz(10)).toEqual("Buzz");
  });
});


