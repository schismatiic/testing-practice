import { calculator } from "../src/calculator.js";

test("two plus two equals four", () => {
  expect(calculator.add(2, 2)).toBe(4);
});
test("four minus two equals two", () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});
test("four times four equals sixteen", () => {
  expect(calculator.multiply(4, 4)).toBe(16);
});
test("sixteen divide 4 equals 4", () => {
  expect(calculator.divide(16, 4)).toBe(4);
});
test("two divide zero equals ERROR", () => {
  expect(calculator.divide(2, 0)).toBe("ERROR");
});
