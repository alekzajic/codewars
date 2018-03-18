
// Working With Arrays II

// In this kata the function returns an array like the one passed to it but 
// with its nth element removed (with 0 <= n <= array.length - 1). The 
// function is already written for you and the basic tests pass, but random 
// tests fail. Your task is to figure out why and fix it.


const removeNthElement = (arr, n) => {
    var arrCopy = arr.slice();
    arrCopy.splice(n, 1); // removes the nth element
    return arrCopy;
  }

  console.log(removeNthElement([1, 2, 3, 4, 5], 4)); //, [1, 2, 3, 4]);
  console.log(removeNthElement([9, 7, 6, 9], 0)); //, [7, 6, 9]);