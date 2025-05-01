function positiveSum(arr) {
    if (arr.length === 0)
        return 0
    let filteredArray = arr.filter(arr => arr > 0)
    if  (filteredArray.length !== 0)
        return filteredArray.reduce((a, b) => a + b)
    else return 0
}

console.log(positiveSum([-1,-2,-3,-4,-5]))