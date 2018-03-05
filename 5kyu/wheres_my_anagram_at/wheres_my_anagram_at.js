let anagrams = (word, words) => {
    return words.filter(function(item){
      return item.split('').sort().join('') === word.sort('').reverse().join('');
    });
}

// ---test

Array.prototype.compare = (array) => {
    if (!array) return false;
    if (this.length != array.length) return false;
  
    for (let i = 0; i < this.length; i++) {
      if (this[i] instanceof Array && array[i] instanceof Array) {
        if (!this[i].compare(array[i]))
          return false;
      }
      else if (this[i] != array[i]) {
        return false;
      }
    }
    return true;
  }
  

testAnagrams = (word, result, wrong) => {
    let results = anagrams(word, result.concat(wrong).sort());
    return results.sort().compare(result.sort());
  }

let word0, result0, wrong0;
word0 = 'a';
result0 = ['a'];
wrong0 = ['b', 'c', 'd'];
console.log(testAnagrams(word0, result0, wrong0));

let word1, result1, wrong1;
word1 = 'ab'
result1 = ['ab', 'ba'];
wrong1 = ['aa', 'bb', 'cc', 'ac', 'bc', 'cd'];
console.log(testAnagrams(word1, result1, wrong1));

let word3, result3, wrong3;
word3 = 'racer'
result3 = ['carer', 'arcre', 'carre', 'recar']
wrong3 = ['racers', 'arceer', 'raccer', 'carrer', 'cerarr']
console.log(testAnagrams(word3, result3, wrong3));