/**
 * Return the number (count) of vowels in the given string.
 * We will consider a, e, i, o, and u as vowels for this Kata.
 * The input string will only consist of lower case letters and/or spaces.
 * 
 * Aleksandar Zajic
 * twitter.com/zajich
 */

getCount1 = (str) => {
    let vowelsCount = str.match(/[aeiou]/ig) || []
    return vowelsCount.length;
}

// 2) ---------------------------------------------

getCount2 = (str) => {
    return str.replace(/[^aeiou]/gi, '').length;
  }

console.log('getCount1: ', getCount1("abracadabra")); // 5
console.log('getCount2: ', getCount2("abracadabra")); // 5