nextBigger = (n) => {
    let arr = n.toString().split('');
    let index = -1; 
    
    // el index
    for (let i=arr.length; i>0; i--) {
        if (+arr[i] > +arr[i-1]) {
            index = i-1;
            break;
        }
    }

    // no el index
    if (index == -1) return index;

    // right
    let right = arr.splice(index);

    // el
    let elem = right.splice(0, 1)[0];

    let min = null;
    let minIndex = null;
    for (let i = 0; i < right.length; i++) {
      if (right[i] > elem) {
        if (min == null || right[i] < min) {
            min = right[i];
            minIndex = i;
        }
      }
    }

    if (minIndex == null) return -1;
  
    right.splice(minIndex, 1);
    right.push(elem);
    right = right.sort();
    
    // left + el + right
    let result = parseInt(arr.concat([min]).concat(right).join(''));

    if (result < n) return -1;
    
    return result;
}


console.log(nextBigger(12)) //21
console.log(nextBigger(513)) //531
console.log(nextBigger(2017)) //2071
console.log(nextBigger(414)) //441
console.log(nextBigger(144)) //414