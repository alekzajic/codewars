const ipsBetween = (start, end) => {
    const startArray = start.split('.');
    const endArray = end.split('.');
    let result = 0;
    let factor = 1;

    for (let i = startArray.length - 1; i >= 0; i--, factor *= 256) {
        result += (endArray[i] - startArray[i]) * factor;
    }

    return result;
}

console.log(ipsBetween("10.0.0.0", "10.0.0.50")) //, 50);
console.log(ipsBetween("20.0.0.10", "20.0.1.0")) //, 246);