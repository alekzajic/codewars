/**
 * Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done
 * before, or after the addition.
 * 
 * The binary number returned should be a string.
 * 
 * Aleksandar Zajic
 * twitter.com/zajich
 */

function addBinary(a,b) {
   return parseInt((a+b), 10).toString(2);
}

console.log(addBinary(123,1232));