const countBits = (n) => {
    return n.toString(2).split('1').length - 1;
};

// TEST

console.log(countBits(0)); //, 0);
console.log(countBits(4)); //, 1);
console.log(countBits(7)); //, 3);
console.log(countBits(9)); //, 2);
console.log(countBits(10)); //, 2);