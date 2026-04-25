# Testing Practice (JavaScript + Jest)

A JavaScript testing practice project focused on learning and applying **unit testing with Jest**. The goal is to write tests first (or alongside implementation) and ensure all functions behave correctly according to the specifications.

---

## Features

- Unit testing with **Jest**
- Babel configuration for ESM/CJS compatibility
- Implementation driven by test cases (TDD approach)
- Focus on pure functions and predictable outputs

---

## What You’ll Build

This project includes several utility functions:

### String Utilities

- `capitalize(string)` → Capitalizes the first letter of a string
- `reverseString(string)` → Reverses a string

---

### Calculator Object

An object containing basic math operations:

- `add(a, b)`
- `subtract(a, b)`
- `multiply(a, b)`
- `divide(a, b)`

---

### Caesar Cipher

- `caesarCipher(string, shift)`
- Shifts letters by a given factor
- Handles:
  - Wrapping from z → a
  - Case preservation
  - Punctuation and spaces unchanged

---

### 📊 Array Analysis

- `analyzeArray(array)`
- Returns an object containing:
  - average
  - min
  - max
  - length

---

## Project Structure

```id="v3x9qp"
/project-root
│── /src
│   │── capitalize.js
│   │── reverseString.js
│   │── calculator.js
│   │── caesarCipher.js
│   │── analyzeArray.js
│── /tests
│   │── capitalize.test.js
│   │── reverseString.test.js
│   │── calculator.test.js
│   │── caesarCipher.test.js
│   │── analyzeArray.test.js
│── babel.config.js
│── package.json
└── README.md
```

---

## Running Tests

Install dependencies:

```bash id="k1d8lm"
npm install
```

Run tests:

```bash id="q9w2as"
npm test
```

---

## Setup Notes

- Uses **Jest** for testing
- Requires **Babel** configuration for module support (ESM/CJS conversion)
- Tests focus on **public API behavior**, not internal helper functions

---

## Key Concepts

- Unit Testing
- Test-Driven Development (TDD)
- Pure Functions
- Jest Matchers
- Code modularization
- Input/output validation

---

## Learning Goal

The main objective is to gain confidence writing tests and ensuring code correctness through automated verification rather than manual checking.

---

## License

This project is open-source.
