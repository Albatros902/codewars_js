function maxProduct(numbers, size){
    return numbers.sort((a, b) => a - b)
        .slice(-size)
        .reduce((sum, el) => sum * el)
}

console.log(maxProduct([4, 3, 5], 2))                                   // 20
console.log(maxProduct([10, 8, 7, 9], 3))                               // 720
console.log(maxProduct([8, 6, 4, 6], 3))                                // 288
console.log(maxProduct([10, 2, 3, 8, 1, 10, 4], 5))                     // 9600
console.log(maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5))  // 247895375
console.log(maxProduct([-4, -27, -15, -6, -1], 2))                      // 4