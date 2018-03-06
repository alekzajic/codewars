const greatestProduct = (input) => {
    let result = [];
    for(let i = 0; i < input.length - 4; i+=1){
        let elem = input.slice(i, i+5)
                        .split('')
                        .reduce((a, b) => a * b, 1);
        result.push(elem);
    };
    let returnResult = result.sort((a, b) => b - a)[0]
    return returnResult;
}

console.log(greatestProduct("123834539327238239583")) // 3240
console.log(greatestProduct("92494737828244222221111111532909999")) // 5292
console.log(greatestProduct("02494037820244202221011110532909999")) // 0