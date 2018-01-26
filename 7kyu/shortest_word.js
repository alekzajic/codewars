/**
 * https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
 * x Simple, given a string of words, return the length of the shortest word(s).
 * String will never be empty and you do not need to account for different data types.
 * 
 * Aleksandar Zajic
 * twitter.com/zajich
 * @param {string} sentence 
 */

/**
 * Finds the number of the smallest word in the sentence
 * @param {any} s 
 * @returns {int} returns number of characters of the smallest word in the sentence.
 */
function findShort(s){
    let wordLengths = s.split(" ").map(s => s.length);
    return Math.min(...wordLengths);
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));                // 3
console.log(findShort("turns out random test cases are easier than writing out basic ones")); // 3