wordsToObject = (string) => {
    let pairs = string.match(/[^\s]+\s[^\s]+/g);
    let arrayOfObjects = pairs.map(element => element.split(' '))
                              .map(element => `{name : '${element[0]}', id : '${element[1]}'}`);

    return '[' + arrayOfObjects.join(', ') + ']';
}

console.log(wordsToObject("red 1 yellow 2 black 3 white 4")); 
// [{name : 'red', id : '1'}, {name : 'yellow', id : '2'}, {name : 'black', id : '3'}, {name : 'white', id : '4'}]