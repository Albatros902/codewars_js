function minMax(arr){
    // let sort = arr.sort((a,b)=>a-b)
    // let [min, max] = [sort[0], sort.pop()]
    // return [min, max]
    return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([1, 2, 3, 4, 5])) //, [1, 5]
console.log(minMax([2334454, 5])) // [5, 2334454]
console.log(minMax([5])) // [5, 5]