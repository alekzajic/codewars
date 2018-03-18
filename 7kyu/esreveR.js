// esreveR

// Write a function reverse which reverses a list 
// (or in clojure's case, any list-like data structure)

let reverse = function(array) {
    let temp = [];
    for(let i = array.length-1; i >= 0; i--) {
      temp.push(array[i]);
    }
    return temp;
}

let reverse2 =a=>a.map(a.pop,[...a]);

console.log( reverse([1,2,3])); //, [3,2,1] )
console.log( reverse([1,null,14,"two"])); //, ["two",14,null,1] )

console.log( reverse2([1,2,3])); //, [3,2,1] )
console.log( reverse2([1,null,14,"two"])); //, ["two",14,null,1] )