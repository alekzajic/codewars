/*
 * Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of
 * the number's decimal digits. For example:
 * 
 * sumDigits(10);  // Returns 1
 * sumDigits(99);  // Returns 18
 * sumDigits(-32); // Returns 5
 * 
 * Let's assume that all numbers in the input will be integer values.
**/

sumDigits = (num) => {
    let sum = 0;

    for (let digit of num.toString()) {
        const dInt = parseInt(digit)
        if (dInt) {
          sum += dInt;
        }
    }
    return sum;  
}


console.log(sumDigits(10)) //  1;
console.log(sumDigits(99)) //  18;
console.log(sumDigits(-32)) //  5;
