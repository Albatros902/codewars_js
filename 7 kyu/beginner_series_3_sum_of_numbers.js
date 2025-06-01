function getSum(a, b){
    let sum = 0
    let min = a < b ? a : b
    let max = a > b ? a : b
    for (min; min <= max; min++) {
        sum += min
    }
    return sum
}

console.log(getSum(5, -1)) // 2