const pascalsTriangle = (n) => {
    let solution = [];
    let index = 0;
  
    for ( let i = 0; i < n; i++ ) {
        index = solution.length - i;
        for ( let j = 0; j < i+1; j++ )
            if (j === 0 || j === i) {
                solution.push(1) 
            } else {
                solution.push(solution[index+j] + solution[index+j-1]);
            }
    }

    return solution;
}

// TEST

console.log(pascalsTriangle(4)); // == [1,1,1,1,2,1,1,3,3,1]  