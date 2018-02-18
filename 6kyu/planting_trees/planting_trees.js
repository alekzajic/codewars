sc = (w,l,g,z=(w+l-2)*2/(g+1)) => z%1 ? 0 : z;

  


console.log(sc(3,3,1)) // 4
console.log(sc(3,3,3)) // 2
console.log(sc(3,3,2)) // 0
console.log(sc(7,7,3)) // 6
console.log(sc(3,3,0)) // 8
console.log(sc(3,3,10)) // 0