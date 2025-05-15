function narcissistic(value) {
    let len = value.toString().length
    let sum = 0
    value.toString().split('')
        .forEach(function (el) {
            sum += el ** len
        })
    return sum === value
}
