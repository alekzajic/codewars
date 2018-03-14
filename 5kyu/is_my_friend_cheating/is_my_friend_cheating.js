const removeNb = (n) => {
    let result = [];
    for (let a = 1; a <= n; a++) {
      let b = (n * (n + 1) / 2 - a) / (a + 1);
      if (b % 1 === 0 && b <= n) {
        result.push([a, b]);
      }
    }
    return result;
  }

// Test

console.log(removeNb(26)); //, [[15,21], [21,15]]);
console.log(removeNb(100)); //, []);