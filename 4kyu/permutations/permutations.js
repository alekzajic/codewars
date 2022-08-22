// In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// * With input 'a'
// * Your function should return: ['a']
// * With input 'ab'
// * Your function should return ['ab', 'ba']
// * With input 'aabb'
// * Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.

function permutations(string) {
	const result = [];
  const permute = (str, prefix = '') => {
    if (str.length === 0) {
      result.push(prefix);
    } else {
      for (let i = 0; i < str.length; i++) {
        permute(str.slice(0, i) + str.slice(i + 1), prefix + str[i]);
      }
    }
  }
  permute(string);
  return result;
}

console.log('permutations');
console.log('permutations("a")',permutations('a'));
console.log('permutations("ab")',permutations('ab'));
console.log('permutations("aabb")',Array.from(new Set(permutations('aabb'))));
