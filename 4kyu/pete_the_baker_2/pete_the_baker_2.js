const getMissingIngredients = (recipe, added) => {
    let getAmount = function(amount){
      amount = parseFloat(amount);
      if(isNaN(amount)){
        amount = 0;  
      }
      return amount; 
    }
    
    let multiple = 1;
    for(key in added){
        multiple = Math.max(
            multiple, 
            getAmount(Math.ceil(getAmount(added[key])/getAmount(recipe[key])))
        );
    }
    let out = {};
    for(let key in recipe){
        let val = getAmount(recipe[key])*multiple -  getAmount(added[key]);
        if(val>0) out[key] = val;  
    }
    return out;
  }

// TEST 

let sortHash = function(hash) {
    return Object.keys(hash).sort().reduce(function(p, c) { p[c] = hash[c]; return p; }, {});
  };
  
let assertSimilarHash = function(expected, actual) {
    console.log(sortHash(expected),'should equal =>', sortHash(actual));
};

let recipe = {flour: 200, eggs: 1, sugar: 100};

assertSimilarHash(getMissingIngredients(recipe, {flour: 50, eggs: 1}), {flour: 150, sugar: 100});
assertSimilarHash(getMissingIngredients(recipe, {}), {flour: 200, eggs: 1, sugar: 100});
assertSimilarHash(getMissingIngredients(recipe, {flour: 500, sugar: 200}), {flour: 100, eggs: 3, sugar: 100});