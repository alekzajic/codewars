function calculation(num, operation) {
    return operation ? operation(num) : num;
}
  
function zero(operation) {return calculation(0, operation);}
function one(operation) {return calculation(1, operation);}
function two(operation) {return calculation(2, operation);}
function three(operation) {return calculation(3, operation);}
function four(operation) {return calculation(4, operation);}
function five(operation) {return calculation(5, operation);}
function six(operation) {return calculation(6, operation);}
function seven(operation) {return calculation(7, operation);}
function eight(operation) {return calculation(8, operation);}
function nine(operation) {return calculation(9, operation);}

function plus(a) {return b => b + a}
function minus(a) {return b => b - a}
function times(a) {return b => b * a}
function dividedBy(a) {return b => b / a}

// TEST

console.log(seven(times(five()))) //, 35);
console.log(four(plus(nine()))) //, 13);
console.log(eight(minus(three()))) //, 5);
console.log(six(dividedBy(two()))) //, 3);