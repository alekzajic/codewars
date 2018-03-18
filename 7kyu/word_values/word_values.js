
const wordValue = (arr) => {
    let str = " abcdefghijklmnopqrstuvwxyz";
    return arr.map(a => !a.length 
        ? 0 
        : a.split('')
           .map(char => str.indexOf(char))
           .reduce((b,c)=>b + c))
           .map((d, idx) => d * (idx+1));
}

console.log( wordValue(["codewars","abc","xyz"])); //, [88,12,225] );
console.log( wordValue(["abc abc","abc abc","abc","abc"])); //, [12,24,18,24] );