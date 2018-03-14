function validBraces(braces){
    while(braces.indexOf('{}') > -1 || braces.indexOf('[]') > -1 || braces.indexOf('()') > -1) {
      braces = braces.replace('{}', '').replace('[]', '').replace('()', '');
    }
    return braces.length == 0;
  }

// TEST

console.log(validBraces( "()" )); //, true);
console.log(validBraces( "[(])" )); //, false);