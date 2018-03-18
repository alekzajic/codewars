giveChange = (num) => {
    let arr = [1, 5, 10, 20, 50, 100];
    for(let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i] * (~~(num/arr[i]));
        arr[i] = ~~(num/arr[i]);
        num -= temp;
    }
    return arr;
}


console.log(giveChange(365)); //, [0,1,1,0,1,3]);
console.log(giveChange(217)); //, [2,1,1,0,0,2]);