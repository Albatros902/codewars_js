function adjacentElementsProduct(array) {
    let sum = array[0] * array[1]
    for (let i = 1; i < array.length; i++) {
        let next_sum = array[i] * array[i+1]
        if (sum < next_sum) { sum = next_sum }
    }
    return sum
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))          // 21
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]))    // 50