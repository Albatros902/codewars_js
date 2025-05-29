function arraySubset(source, subset) {
    let source_sort = [...new Set(source)].sort()
    for (let el in subset) {
        if (source_sort[el] !== subset[el]) return false
    }
    return true
}
console.log(arraySubset([2, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])) // -> false
console.log(arraySubset([1, 2], [1, 2, 3])) // -> false
