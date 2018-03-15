validParentheses = (parens) => {
    while(parens.indexOf('()') !== -1) {
      parens = parens.replace('()', '');
    }
    return parens.length == 0;
}

console.log(validParentheses( "()" )); //, true);
console.log(validParentheses( "())" )); //, false);