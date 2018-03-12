dontGiveMeFive = (start, end) => {
    var output = [];
    while (start <= end) {
      if (start.toString().includes('5')) {
        start++;
      } else {
        output.push(start);
        start++;
      }
    }
    return output.length;
};

console.log(dontGiveMeFive(1,9)); //, 8);)