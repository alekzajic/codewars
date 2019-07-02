// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2


function GetSum(a, b) {
  let start = Math.min(a, b);
  let end = Math.max(a, b);

  let sum = 0;
  for (let i=start; i <= end; i += 1) {
    sum += i
  }
  return sum;
}


console.log(GetSum(0,-1) === -1);
console.log(GetSum(0,1) === 1);