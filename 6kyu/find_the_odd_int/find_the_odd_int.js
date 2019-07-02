/**
 * Given an array, find the int that appears an odd number of times.
 * There will always be only one integer that appears an odd number of times.
 */

function findOdd(a) {
  if (a.length <= 0) {
    return 0;
  }

  const counters = {};
  a.forEach(n => { counters[n] = (counters[n] || 0) + 1})
  const result = Object.keys(counters).find(c => counters[c] % 2 !== 0);
  return parseInt(result, 10);
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) === 5);
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]) === -1);
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]) === 5);
console.log(findOdd([10]) === 10);
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]) === 10);
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]) === 1);