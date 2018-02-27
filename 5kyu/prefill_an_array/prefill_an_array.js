prefill = (n, v) => {
  const num = parseInt(n);

  if (Number.isNaN(num) || num < 0 || n%1 !== 0 ) throw new TypeError(`${n} is invalid`);

  if (num === 0) return [];

  return Array(num).fill(v);
}

console.log(prefill(3,1)) //, [1,1,1]);
console.log(prefill(2,'abc')) //, ['abc','abc']);
console.log(prefill('1',1)) //, [1]);
console.log(prefill(3, prefill(2,'2d'))) //, [['2d','2d'],['2d','2d'],['2d','2d']]);

// BEST 

function prefill2(num, value) {
    if(typeof num === 'boolean' || ~~num != num || +num < 0) throw new TypeError(num + ' is invalid')
    return Array.apply(null, Array(+num)).map(function (d,i) { return value })
}


console.log(prefill2(3,1)) //, [1,1,1]);
console.log(prefill2(2,'abc')) //, ['abc','abc']);
console.log(prefill2('1',1)) //, [1]);
console.log(prefill2(3, prefill(2,'2d'))) //, [['2d','2d'],['2d','2d'],['2d','2d']]);