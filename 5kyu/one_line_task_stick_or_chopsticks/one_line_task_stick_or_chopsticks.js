stickOrChopsticks=(t,n)=>t[8]?n*2:n/2|-n%2

console.log(stickOrChopsticks("stick",10)); //,5)
console.log(stickOrChopsticks("stick",11)); //,-1)
console.log(stickOrChopsticks("chopstick",5)); //,10)