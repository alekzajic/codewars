// You only need one

// https://www.codewars.com/kata/57cc975ed542d3148f00015b/

// You will be given an array (a) and a value (x). All you need to do is check whether 
// the provided array contains the value.

// Array can contain numbers or strings. X can be either. Return true if the array 
// contains the value, false if not.

const check = (a,x) => { return a.indexOf(x) > -1 };
console.log(check([66, 101], 66)); //, true);
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45)); //, true);
console.log(check(['t', 'e', 's', 't'], 'e')); //, true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat')); //, false);

const check2 = (a,x) => { return a.includes(x) };
console.log(check2([66, 101], 66)); //, true);
console.log(check2([80, 117, 115, 104, 45, 85, 112, 115], 45)); //, true);
console.log(check2(['t', 'e', 's', 't'], 'e')); //, true);
console.log(check2(['what', 'a', 'great', 'kata'], 'kat')); //, false);