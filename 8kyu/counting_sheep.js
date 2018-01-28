/**
 * Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the 
 * number of sheep present in the array (true means present).
 * 
 * For example,
 * 
 * [true,  true,  true,  false,
 *  true,  true,  true,  true ,
 *  true,  false, true,  false,
 *  true,  false, false, true ,
 *  true,  true,  true,  true ,
 *  false, false, true,  true]
 * 
 * The correct answer would be 17.
 * 
 * Hint: Don't forget to check for bad values like null/undefined.
 */

countSheeps1 = (arrayOfSheep) => {
    return arrayOfSheep.filter(item => item === true).length
}

countSheeps2 = (arrayOfSheep) => {
    return arrayOfSheep.filter(Boolean).length;
}

var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];
    
console.log(countSheeps1(array1)) //  == 17, "There are 17 sheeps in total"
console.log(countSheeps2(array1)) //  == 17, "There are 17 sheeps in total"