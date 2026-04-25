import { capitalize } from "../src/capitalize.js";

test("hello to be Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});
test("goodbye to be Goodbye", () => {
  expect(capitalize("goodbye")).toBe("Goodbye");
});
test("hello world! to be Hello world!", () => {
  expect(capitalize("hello world!")).toBe("Hello world!");
});
