function flatten(array) {
    return array.flat(Infinity)
}
console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]