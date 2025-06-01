function removeSmallest(numbers) {
    let array = [...numbers]
    let min = [...array]
    min = min.sort((a,b)=>a-b)[0]
    let index = array.indexOf(min)
    array.splice(index, 1)
    return array
}

console.log(removeSmallest([1, 2, 3, 4, 5]))    // [2, 3, 4, 5]
console.log(removeSmallest([5, 3, 2, 4]))       // [5, 3, 4]