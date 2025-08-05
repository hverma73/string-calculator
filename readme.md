# 🧮 String Calculator - TDD Kata in Node.js

This project is an implementation of the **String Calculator** kata using **Test-Driven Development (TDD)** with **Node.js** and **Jest**.

## Problem Statement

Write a function `add(numbers)` that takes a string of numbers separated by delimiters and returns their sum.

### Requirements

1. An empty string returns `0`
2. A single number returns that number
3. Two numbers comma-delimited return their sum  
   Example: `"1,2"` → `3`
4. Handle an unknown amount of numbers  
   Example: `"1,2,3,4"` → `10`
5. Allow newline (`\n`) as a delimiter  
   Example: `"1\n2,3"` → `6`
6. Support custom delimiters  
   Format: `"//[delimiter]\n[numbers...]"`  
   Example: `"//;\n1;2"` → `3`
7. Throw an exception on negative numbers  
   Message: `"negative numbers not allowed: -1,-2"`

---

### Test results
<img width="560" height="475" alt="image" src="https://github.com/user-attachments/assets/b080186c-04e6-4c16-a7a7-a9f1a2dbe194" />


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14+
- [npm](https://www.npmjs.com/)

### Setup

```bash
# Clone the repo
git clone (https://github.com/hverma73/string-calculator.git)
cd string-calculator-tdd

# Install dependencies
npm install
