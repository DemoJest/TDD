function estDivisiblePar(nombre: number, diviseur: number) {
    return nombre % diviseur === 0;
}


function fizzbuzz(n: number){
    if(estDivisiblePar(n, 15)){
        return "FizzBuzz";
    }
    if (estDivisiblePar(n, 3)) {
        return "Fizz";
    }
    if(estDivisiblePar(n, 5)) {
        return "Buzz";
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


