nextBigger = (n) => {
    let arr = n.toString().split('');
    let index = -1; 
    
    // find element index thant needs to be changed
    for (let i=arr.length; i>0; i--) {
        if (+arr[i] > +arr[i-1]) {
            index = i-1;
            break;
        }
    }

    // if there is no bigger number return -1
    if (index == -1) return index;

    // get right part of the number from pivot
    let right = arr.splice(index);

    // smallest number in the right part
    let elem = right.splice(0, 1)[0];

    // min num
    let min = null;
    // min index
    let minIndex = null;

    // find the number to switch and its index
    for (let i = 0; i < right.length; i++) {
      if (right[i] > elem) {
        if (min == null || right[i] < min) {
            min = right[i];
            minIndex = i;
        }
      }
    }

    if (minIndex == null) return -1;
  
    // rmove the number that needs to be changed
    right.splice(minIndex, 1);
    
    // add number to the place of that needs to be changed
    right.push(elem);

    // sort the right side
    right = right.sort();

    // left + el + right
    let result = parseInt(arr.concat([min]).concat(right).join(''));

    if (result < n) return -1;
    
    return result;
}

console.log(nextBigger(342)) //423
console.log(nextBigger(12)) //21
console.log(nextBigger(513)) //531
console.log(nextBigger(2017)) //2071
console.log(nextBigger(414)) //441
console.log(nextBigger(144)) //414