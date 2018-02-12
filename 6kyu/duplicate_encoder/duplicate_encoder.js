duplicateEncode = (word) => {
    return word.toLowerCase()
               .split('')
               .map((char, index, array) => {
                    if (array.indexOf(char) === array.lastIndexOf(char)) {
                        return '(';
                    } else return ')';
               })
               .join('');
}


console.log(duplicateEncode("din")); // "((("
console.log(duplicateEncode("recede")); // "()()()"
console.log(duplicateEncode("Success")); // ")())())"
console.log(duplicateEncode("(( @")); // "))(("
