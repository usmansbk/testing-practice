const capitalize = require("./capitalize");

test("alphanumic string", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("empty string", () => {
  expect(() => capitalize("")).toThrow();
});

test("number", () => {
  expect(() => capitalize(2)).toThrow();
});
