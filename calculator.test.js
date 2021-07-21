const Calculator = require("./calculator");

describe("add", () => {
  test("2 + 3", () => {
    const calculator = new Calculator();

    const answer = calculator.add(2, 3);

    expect(answer).toBe(5);
  });

  test("0 + -1", () => {
    const calculator = new Calculator();

    const answer = calculator.add(0, -1);

    expect(answer).toBe(-1);
  });

  test("-1 + -1", () => {
    const calculator = new Calculator();

    const answer = calculator.add(-1, -1);

    expect(answer).toBe(-2);
  });
});
