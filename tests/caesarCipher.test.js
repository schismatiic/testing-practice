import { caesarCipher } from "../src/caesarCipher.js";

test("hello with shift factor 3 to be koor", () => {
  expect(caesarCipher("hello", 3)).toBe("khoor");
});
test("It wraps from z to a (tested with shift factor 3 again)", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
test("HeLLo with shift factor 3 to be KhOOr", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});
test("Hello, World! with shift factor 3 to be Khoor, Zruog!", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
