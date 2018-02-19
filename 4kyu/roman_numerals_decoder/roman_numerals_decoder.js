solution = (roman) => {
    const letters = {
        'MM': 2000,
        'M': 1000,
        'CM': 900,
        'D': 500,
        'C': 100,
        'XC': 90,
        'L': 50,
        'X': 10,
        'V': 5,
        'IV': 4,
        'I': 1,
    }
    const symbols = Object.keys(letters);

    if (roman.length) {
        return (() => {
            let result = [].concat(...symbols.map(symbol => {
                if (roman.indexOf(symbol) === 0) {
                    return [letters[symbol], roman.substr(symbol.length)]
                } else {
                    return [];
                }
            }));
        
            return result[0] + solution(result[1]);
            console.log(result);
        })();
    } else {
        return 0;
    }
    
}

console.log(solution('MCMXC')); //1990
console.log(solution('MMVIII')); //2008
console.log(solution('MDCLXVI')); //1666
console.log(solution('MDCLXIV')); //1664