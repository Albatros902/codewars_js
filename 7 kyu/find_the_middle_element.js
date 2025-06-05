function gimme (triplet) {
    let arr = [...triplet]
    arr.sort((a,b)=>a-b)
    let index = arr[1]
    return triplet.indexOf(index)
}

console.log(gimme([2, 3, 1]))    // 0
console.log(gimme([5, 10, 14]))  // 1

// 1 2 3 = 5/4/3
// 2 3 1 = 4/3/5
// 2 1 3 = 4/5/3
// 3 2 1 = 3/4/5