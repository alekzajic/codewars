function calc(expr) {
  const input = expr.split(' ');
  const stack = [];

  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };

  for (let i = 0; i < input.length; i++) {
    const token = input[i];
    if (operations[token]) {
      const rightValue = stack.pop();
      const leftValue = stack.pop();
      const result = operations[token](+leftValue, +rightValue);
      stack.push(result);
    } else {
      stack.push(token);
    }
  }

  return +stack.pop();
}

console.log(calc('5 1 2 + 4 * + 3 -') === 14)
console.log(calc("") === 0) //, "Should work with empty string");
console.log(calc("3") === 3) //, "Should parse numbers");
console.log(calc("3.5") === 3.5) //, "Should parse float numbers");
console.log(calc("1 3 +") === 4) //, "Should support addition");
console.log(calc("1 3 *") === 3) //, "Should support multiplication");
console.log(calc("1 3 -") === -2) //, "Should support subtraction");
console.log(calc("4 2 /") === 2) //, "Should support division");