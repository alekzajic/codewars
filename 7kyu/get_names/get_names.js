getNames = (data) => data.map(item => item.name);

var data = [
    {name: 'Joe', age: 20},
    {name: 'Bill', age: 30},
    {name: 'Kate', age: 23}
]
  
var data2 = [
    {name: 'Jane', age: 20},
    {name: 'Sam', age: 30}
]
  
console.log(getNames(data)) //, ['Joe', 'Bill', 'Kate'])
console.log(getNames(data2)) //, ['Jane', 'Sam'])
 