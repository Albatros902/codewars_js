function twoHighest(arr) {
    if (arr === undefined || arr.length === 0) return arr
    let firsthigh = 0;
    let secondhigh = 0;
    for  (let i=0; i < arr.length; i++) {
        if (arr[i] > firsthigh) {
            firsthigh = arr[i];
        }
    }
    for  (let i=0; i < arr.length; i++){
            if (arr[i] > secondhigh && arr[i]<firsthigh) {
            secondhigh = arr[i];
        }
    }
    if (secondhigh === 0) return [firsthigh]
    return [firsthigh, secondhigh]
}