let uniqueInOrder = (iterable) =>{
    if (iterable.length == 0) return [];
    
    let stack= [iterable[0]];
    
    if(typeof iterable === 'string'){
      iterable = iterable.split('');
    }  
    
    iterable.reduce(function(accum,i){
      if(accum != i){
        stack.push(i);
      }
      return i;
    });
    
    return stack;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')) //, ['A','B','C','D','A','B'])