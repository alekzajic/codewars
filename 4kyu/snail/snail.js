snail = (array) => {
    let firstRow = 0;
    let lastRow = array.length - 1;
    let firstCol = 0;
    let lastCol = array[0].length - 1;
   
    let count = 0;

    const results = [];
    
    while (firstCol <= lastCol && firstRow <= lastRow) {
        // Top row
        for (let i = firstCol; i <= lastCol; i++) {
          results[count] = array[firstRow][i];
          count++;
        }
        firstRow++;
    
        // Right column
        for (let i = firstRow; i <= lastRow; i++) {
          results[count] = array[i][lastCol];
          count++;
        }
        lastCol--;
    
        // Bottom row
        for (let i = lastCol; i >= firstCol; i--) {
          results[count] = array[lastRow][i];
          count++;
        }
        lastRow--;
    
        // start column
        for (let i = lastRow; i >= firstRow; i--) {
          results[count] = array[i][firstCol];
          count++;
        }
        firstCol++;
      }
    return results;
}


array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
console.log(snail(array)) // #=> [1,2,3,6,9,8,7,4,5]