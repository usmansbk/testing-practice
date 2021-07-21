const calculator = require("./calculator");

describe("add", () => {
  test("2 + 3", () => {
    const answer = calculator.add(2, 3);

    expect(answer).toBe(5);
  });

  test("0 + -1", () => {
    const answer = calculator.add(0, -1);

    expect(answer).toBe(-1);
  });

  test("-1 + -1", () => {
    const answer = calculator.add(-1, -1);

    expect(answer).toBe(-2);
  });
});

describe("subtract", () => {
  test("1 - 1", () => {
    const answer = calculator.subtract(1, 1);

    expect(answer).toBe(0);
  });

  test("1 - -1", () => {
    const answer = calculator.subtract(1, -1);

    expect(answer).toBe(2);
  });

  test("0 - 1", () => {
    const answer = calculator.subtract(0, -1);

    expect(answer).toBe(1);
  });
});

describe("divide", () => {
  test("4 / 2", () => {
    const answer = calculator.divide(4, 2);

    expect(answer).toBe(2);
  });

  test("2 / 4", () => {
    const answer = calculator.divide(2, 4);

    expect(answer).toBeCloseTo(0.5);
  });

  test("4 / 0", () => {
    const answer = calculator.divide(4, 0);

    expect(answer).toBe(Infinity);
  });
});

describe("multiply", () => {
  test("4 * 2", () => {
    const answer = calculator.multiply(4, 2);

    expect(answer).toBe(8);
  });

  test("2 * 0.5", () => {
    const answer = calculator.multiply(2, 0.5);

    expect(answer).toBeCloseTo(1.0);
  });

  test("4 * 0", () => {
    const answer = calculator.multiply(4, 0);

    expect(answer).toBe(0);
  });
});
