runningAverage = () => {
    let sum = 0;
    let numOfItems = 0;
    return (value) => {
        sum += value;
        numOfItems += 1;
        return Math.round((sum / numOfItems) * 100) / 100;
    }
};


var avg = runningAverage();
console.log(avg(10)); //10
console.log(avg(11)); //10.5   
console.log(avg(12)); //11   