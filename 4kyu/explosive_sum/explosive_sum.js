sum = (number) => {

    if (number <= 0) return 0;

    let arr = [];
    
    for (let i = 1; i <= number; i++) {
      arr[i] = i;
    }
    
    let first = [];
    let second = [];

    for (let i = 0; i <= number; i++) {
      first[i] = second[i] = 0;
    }
    first[0] = 1;

    // 
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j <= number; j++) {
        for (let k = 0; j + k <= number; k += arr[i]) {
          second[j + k] += first[j];
        }
        first[j] = second[j]; 
        second[j] = 0;
      }
    }

    return first[number];
  }


console.log(sum(-1)) //, 0);
console.log(sum(1)) //, 1);
console.log(sum(2)) //, 2);
console.log(sum(3)) //, 3);
console.log(sum(4)) //, 5);
console.log(sum(5)) //, 7);
console.log(sum(10)) //, 42);