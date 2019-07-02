function digital_root(n) {
  while (n > 9) {
    n = n
        .toString()
        .split('')
        .reduce((sum, digit) => sum + parseInt(digit,10), 0);
    
    if ( n > 9 ) continue;
  }
  return n;
}


console.log( digital_root(16) === 7 )
console.log( digital_root(456) === 6 )