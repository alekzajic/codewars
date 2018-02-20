pickPeaks = (arr) => {
    let pos = [];
    let peaks = [];

    let flat = false;
    let flatPos = null;
    let flatPeak = null;
    
    for (let i = 1; i < arr.length - 1; i += 1) {
        if (arr[i] > arr[i-1] && arr[i] > arr[i+1]){
            pos.push(i);
            peaks.push(arr[i]);
        }
            
        if (arr[i] > arr[i-1] && arr[i] === arr[i+1]){
            flat = true;
            flatPos = i;
            flatPeak = arr[i];
        }
            
        if (arr[i] === arr[i-1] && arr[i] > arr[i+1] && flat){
            pos.push(flatPos);
            peaks.push(flatPeak);
            flat = false;
        }
    }
        
    return {pos,peaks}
}

console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3])) // {pos:[3,7],peaks:[6,3]}