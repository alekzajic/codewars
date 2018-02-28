pigIt = (str) => {
    let string = '';
    
    let words = str.split(' ');

    for(let i = 0; i < words.length; i++){
        let word = words[i].split('');
        word.push(word[0]);
        word.splice(0,1);
        word = word.join('');
        string += `${word}ay `;
    }
    //remove last space from string.
    string = string.slice(0,-1);
    return string;
}

console.log(pigIt('Pig latin is cool')) //'igPay atinlay siay oolcay' 
console.log(pigIt('This is my string')) //'hisTay siay ymay tringsay' 

// BEST

function pigIt2(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}
console.log(pigIt2('Pig latin is cool')) //'igPay atinlay siay oolcay' 
console.log(pigIt2('This is my string')) //'hisTay siay ymay tringsay' 