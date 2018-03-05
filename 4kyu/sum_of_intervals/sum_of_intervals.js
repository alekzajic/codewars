sumIntervals = (intervals) => {
  let values = [];
  intervals.forEach(interval => {
    for (let i = interval[0]; i < interval[1]; i += 1) {
      values.push(i);
    }
  });
  let result = [...new Set(values)].length;
  return result;
}



const test1 = [[1,5]];
const test2 = [[1,5],[6,10]];
console.log(sumIntervals(test1)) //, 4);
console.log(sumIntervals(test2)) //, 8);

const test3 = [[1,5],[1,5]];
const test4 = [[1,4],[7, 10],[3, 5]];
console.log(sumIntervals(test3)) //, 4);
console.log(sumIntervals(test4)) //, 7);
