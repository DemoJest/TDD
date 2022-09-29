function estDivisiblePar(nombre: number, diviseur: number) {
    return nombre % diviseur === 0;
}

function fizzbuzz(n: number){
    let result = '';
    const map = new Map();
    map.set(3, "Fizz");
    map.set(5, "Buzz");
    map.forEach((value, key) => {
        if (estDivisiblePar(n,key)){
            result = `${result}${value}`;
        }
    });
    return result !== '' ? result: `${n}`;
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


