function dontGiveMeFive(start, end) {
    let res = 0
    for (start; start <= end; start++) {
        if (!start.toString().includes('5')) {
            res++
        }
    }
    return res
}
console.log(dontGiveMeFive(49,60))    // 8
console.log(dontGiveMeFive(4,17))   // 12