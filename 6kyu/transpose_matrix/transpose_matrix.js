const transpose = (matrix) => {
    let m = [];
    for (let j = 0; j < matrix[0].length; j++) {
      let temp = [];
      for (let i = 0; i < matrix.length; i++) {
        temp.push(matrix[i][j]);
      }
      m.push(temp);
    }
    return m;
  }

// TEST

console.log(transpose([[1]])); //, [[1]]);
console.log(transpose([[1,2,3],[4,5,6]])); //, [[1,4],[2,5],[3,6]]);

// BEST

function transpose2(matrix) {
  return matrix[0].map(function(uselessValue, colIndex){
      return matrix.map(function(uselessRow, rowIndex){
          return matrix[rowIndex][colIndex];
      });
  });
}

console.log(transpose2([[1]])); //, [[1]]);
console.log(transpose2([[1,2,3],[4,5,6]])); //, [[1,4],[2,5],[3,6]]);