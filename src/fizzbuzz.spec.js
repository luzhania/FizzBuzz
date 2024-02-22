import generateFizzBuzz from "./fizzbuzz.js";

describe("Fizzbuzz", () => {
  it("should generate the same number for one that doesn't have rules, like the 1", () => {
    expect(generateFizzBuzz(1)).toEqual("1");
  });
  
});


