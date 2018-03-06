const makePalindrome = (text) => {
    let reverseString = s => s.split('').reverse().join('');

    let isPalidrome = (s) => {
        for (let i = 0; i < Math.floor(s.length / 2); i++) {
            if (s[i] !== s[s.length - 1 - i]) {
                return false;
            }
        }
        return true;
    };

    for (let i = 0; i < text.length - 1; i++) {
        if (isPalidrome(text.slice(i))) {
            return text + reverseString(text.slice(0, i));
        } else if (isPalidrome(text.slice(0, text.length - i))) {
            return reverseString(text.slice(text.length - i)) + text;
        }
    }

    return text + reverseString(text.slice(0, -1));
}

console.log(makePalindrome('a')) //, 'a');
console.log(makePalindrome('radar')) //, 'radar');
console.log(makePalindrome('racecar')) //, 'racecar');
console.log(makePalindrome('ab')) //, 'aba');
console.log(makePalindrome('abb')) //, 'abba');
console.log(makePalindrome('abc')) //, 'abcba');
console.log(makePalindrome('rad')) //, 'radar');
console.log(makePalindrome('race')) //, 'racecar');