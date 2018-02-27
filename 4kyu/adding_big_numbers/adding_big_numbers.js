add = (a, b) => {
    let result = '';
    let carry = 0;
    let number;

    for (let i = a.length-1, j = b.length-1; i >= 0 || j >= 0; i -= 1, j -= 1) {

        number = carry;

        if (i >= 0) { 
            number += parseInt(a[i]); 
        }
        if (j >= 0) { 
            number += parseInt(b[j]); 
        }

        carry = 0;
        
        if (number >= 10) {
        carry = 1;
        number = number - 10;
        }

        result = number.toString() + result;
    }

    if (carry) { 
        result = '1' + result; 
    }

    return result;
}

console.log(add('324524634565436345643','2522345325324523453245'));

// BEST 

function add2(a, b) {
    var res = '', c = 0
    a = a.split('')
    b = b.split('')
    while (a.length || b.length || c) {
      c += ~~a.pop() + ~~b.pop()
      res = c % 10 + res
      c = c > 9
    }
    return res
  }

  console.log(add2('324524634565436345643','2522345325324523453245'));

