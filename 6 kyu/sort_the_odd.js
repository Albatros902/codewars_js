function sortArray(array) {
    let count = 0
    let arr_odd = array.filter((el) => el % 2 !== 0).sort((a, b) => a - b)
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            array[i] = arr_odd[count]
            count++
        }
    }
    return array
}


console.log(sortArray([5, 3, 2, 8, 1, 4])) // [1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0])) // [1, 3, 5, 8, 0]
console.log(sortArray([3, 2, 4, 1, 2])) // [1, 2, 4, 3, 2]