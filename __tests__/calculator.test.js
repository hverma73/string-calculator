const { add } = require("../src/calculator");

test("return 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("returns number for single number", () => {
  expect(add("1")).toBe(1);
});

test("returns sum for two numbers", () => {
  expect(add("1,10")).toBe(11);
});

test("returns sum for multiple numbers", () => {
  expect(add("1,2,3")).toBe(6);
});

test("handles new lines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("supports custom delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("throws error on single negative number", () => {
  expect(() => add("1,-2,3")).toThrow("negative numbers are not allows -2");
});

test("throws error on multiple negative numbers", () => {
  expect(() => add("1,-2,-3")).toThrow("negative numbers are not allows -2, -3");
});