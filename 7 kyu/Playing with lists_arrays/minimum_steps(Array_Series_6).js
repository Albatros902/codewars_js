function minimumSteps(numbers, value){
    numbers.sort((a, b) => a - b)
    console.log(numbers)
    let [sum, res] = [numbers[0], 0]
    for (let i = 1; i < numbers.length; i++) {
        if (sum >= value) { break }
        sum += numbers[i]
        res++
    }
    return res
}

console.log(minimumSteps([4, 6, 3], 7))    // 1
console.log(minimumSteps([2,4,4,6,8,8,9,9,16,54,54,65,73,78,88,97], 254)) //12