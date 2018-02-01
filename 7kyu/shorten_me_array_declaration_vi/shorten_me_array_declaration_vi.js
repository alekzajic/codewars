// 1) ---------------------------- (MINE)
a='JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember'.split(/(?=[A-Z])/);
array1=()=>a.concat(a)
console.log(array1());

// 2) ---------------------------- (SHORTEST)
array2=$=(_=24)=>_?[new Date(0,24-_).toLocaleString('en',{month:'long'}),...$(--_)]:[]
console.log(array2());