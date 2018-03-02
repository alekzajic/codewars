solution = (number) =>{
  const symbol = {
      1000:"M",
      900:"CM",
      500:"D",
      400:"CD",
      100:"C",
      90:"XC",
      50:"L",
      40:"XL",
      10:"X",
      9:"IX",
      5:"V",
      4:"IV",
      1:"I"
  };
  let solution = '';
  Object.keys(symbol)
        .reverse()
        .forEach((key) => {
            while (number >= key) {
                solution = solution.concat(symbol[key]);
                number -= key;
            }
        });
  return solution;
}

console.log(solution(1) == 'I') //, '1 should == "I"')
console.log(solution(4) == 'IV') //, '4 should == "IV"')
console.log(solution(1000) == 'M') //, '1000 should == "M"')
console.log(solution(1990) == 'MCMXC') //, '1990 should == "MCMXC"')
console.log(solution(2007) == 'MMVII') //, '2007 should == "MMVII"')
