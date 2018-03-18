// Without the Letter 'E'

// Given String str, return:

// How much "e" does it contains (case-insensitive) - return number as String.
// If given String doesn't contain any "e", return: There is no "e".
// If given String is empty, return empty String.
// If given String is null, return null

findE = (str) => {
    let strLength = str.length;
    let isE = (str.toLowerCase().indexOf('e') > -1) 
                ? String(str.match(/e/gi).length) 
                : 'There is no "e".';
    return (str === null) 
            ? null 
            : !strLength 
                ? '' 
                : isE;
}

console.log(findE("e")); //, "1", "Should return 1");
console.log(findE("English")); //, "1", "Should return 1");