persistence = (num) => {
    let n = 0;
    let resultNum;
    let arr = num.toString().split('');
                 
    while (arr.length > 1) {
    
      resultNum = arr.reduce((a, b) => {
        return a * b;
      });
      
      arr = resultNum.toString().split('');
      n += 1;
      
    }
    return n;
}


console.log(persistence(39)) // 3
console.log(persistence(4)) // 0
console.log(persistence(25)) // 2
console.log(persistence(999)) // 4