import { reverseString } from "../src/reverseString.js";

test("hello to be olleh", () => {
  expect(reverseString("hello")).toBe("olleh");
});
test("goodbye to be eybdoog", () => {
  expect(reverseString("goodbye")).toBe("eybdoog");
});
test("hello world! to be !dlrow olleh", () => {
  expect(reverseString("hello world!")).toBe("!dlrow olleh");
});
