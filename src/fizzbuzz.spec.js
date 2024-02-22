import generateFizzBuzz from "./fizzbuzz.js";

describe("Fizzbuzz", () => {
  it("should generate the same number for one that doesn't have rules, like the 1", () => {
    expect(generateFizzBuzz(1)).toEqual("1");
  });
  it("should generate the same number for another number that doesn't have rules, like the 2", () => {
    expect(generateFizzBuzz(2)).toEqual("2");
  });
  it("should generate Fizz for another number that is multiple, like the 3", () => {
    expect(generateFizzBuzz(3)).toEqual("Fizz");
  });
});


