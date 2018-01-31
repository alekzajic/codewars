decipherThis = (str) => {

    let encryptedWords = str.split(/\s+/);

    let decryptedWords = encryptedWords.map((word) => {
        let letters = word.replace(/\d+/, '');
        let asciiCode = word.replace(/[^\d]+/, '');
        let firstLetter = String.fromCharCode(asciiCode);

        let lettersArray = letters.split('');
 
        if (lettersArray.length > 3) {
            let firstLetter = lettersArray.shift()
            lettersArray.unshift(lettersArray[lettersArray.length - 1]);
            lettersArray.pop();
            lettersArray.push(firstLetter);
        } else {
            lettersArray = lettersArray.reverse();
        }
        return `${firstLetter}${lettersArray.join('')}`;
    })

    return decryptedWords.join(' ');

}; 

console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'))//, 'Have a go at this and see how you do'); 