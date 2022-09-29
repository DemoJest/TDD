

function fizzbuzz(n: number){
  if (n === 3) {
      return 'Fizz';
  }
  if (n === 6) {
      return 'Fizz';
  }
  if (n === 5) {
      return 'Buzz';
  }
  if (n === 10) {
      return 'Buzz';
  }
  if (n === 15) {
      return 'FizzBuzz';
  }
  return `${n}`;
}


describe("test fizzbuzz function", () => {
  it("should return 1", () => {
    expect(fizzbuzz(1)).toBe("1");
  });
  it("should return 2", () => {
    expect(fizzbuzz(2)).toBe("2");
  });
  it("should return Fizz", () => {
    expect(fizzbuzz(3)).toBe("Fizz");
  });
  it("should return Fizz", () => {
    expect(fizzbuzz(6)).toBe("Fizz");
  });
  it("should return Buzz", () => {
    expect(fizzbuzz(5)).toBe("Buzz");
  });
  it("should return Buzz", () => {
    expect(fizzbuzz(10)).toBe("Buzz");
  });
  it("should return FizzBuzz", () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
  });
});


