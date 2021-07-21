const stringLength = require("./stringLength");

test("count the length of a string", () => {
  expect(stringLength("Hello!")).toBe(6);
});

test("string is at least 1 character long", () => {
  expect(() => stringLength("")).toThrow();
});

test("string is not longer than 10 characters", () => {
  expect(() => stringLength("Hello World!")).toThrow();
});
