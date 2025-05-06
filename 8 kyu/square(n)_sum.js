function squareSum(numbers){
    let sum = 0
    numbers.forEach(function (num){
        sum = (num ** 2) + sum
    })
    return sum
}