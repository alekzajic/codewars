/**
 * In this Kata, you will be given a string that has lowercase letters and numbers. 
 * Your task is to compare the number groupings and return the largest number.
 * 
 * For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.
 */

// 1) -------------------------------

solve1 = (string) => {
    return string
            .replace(/[^0-9]/g,' ')
            .split(' ')
            .map(Number)
            .sort((a, b) => b - a)[0];
};

// 2) --------------------------------

solve2 = s => Math.max(...s.match(/\d+|$/g));

console.log("solve1: ", solve1("gh12cd900y695m1")); // 695
console.log("solve2: ", solve2("gh12cd900y695m1")); // 695