function minSum(arr) {
    let sum = 0
    let left_side = [...arr].sort((a,b)=> a-b)
    const right_side = left_side.slice(arr.length / 2).reverse()
    left_side = left_side.slice(0, arr.length / 2)
    for (let i = 0; i < left_side.length; i++) {
        sum += left_side[i] * right_side[i]
    }
    return sum
}

//best solution
function minSum2(arr) {
    return arr.sort( (a,b) => a-b )
        .slice(0, arr.length/2)
        .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
}

console.log(minSum([5,4,2,3]))          //22
console.log(minSum([12,6,10,26,3,24]))  // 342
console.log(minSum([9,2,8,7,5,4,0,6]))  // 74