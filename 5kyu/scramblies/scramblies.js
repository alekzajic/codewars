/**
 * @function {scramble}
 * @param  {string} str1 First string with jumbled letters where we look the second string letters
 * @param  {string} str2 Second string
 * @return {boolean} First string contains all the letters from the second string
 */
scramble = (str1, str2) => {
    const word1 = str1.split('')
                      .sort();
    const word2 = str2.split('')
                      .sort();
    let i = 0;
    let j;
    for(j = 0; i < word2.length && j <= word1.length; j+=1) {
        if(word2[i] === word1[j]) {
            i+=1;
        }
    }
    return (j <= word1.length);
} 

console.log(scramble('rkqodlw','world')) // true
console.log(scramble('scriptjava','javascript')) //true;
console.log(scramble('cedewaraaossoqqyt','codewars')) //true;
console.log(scramble('katas','steak')) //false;
console.log(scramble('scriptingjava','javascript')) //true;
console.log(scramble('scriptsjava','javascripts')) //true;
console.log(scramble('jscripts','javascript')) //false;
console.log(scramble('aabbcamaomsccdd','commas')) //true;
console.log(scramble('otacomb','cat')) //true;
console.log(scramble('god','dog')) //true;