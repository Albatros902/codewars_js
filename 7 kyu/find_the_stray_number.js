function stray(numbers) {
    numbers.sort()
    return numbers[0] !== numbers[1] && numbers[1] === numbers[2] ? numbers[0] : +numbers.slice(-1)
}

console.log(stray([1, 1, 2]))  // 2
console.log(stray([1, 2, 1, 1]))  // 2
console.log(stray([2, 1, 1]))  // 2
console.log(stray([2, 3, 3]))  // 2