function oddOrEven(array) {
    return array.reduce((sum, el)=> sum = sum + el, 0) % 2 === 0 ? 'even' : 'odd'
}

console.log(oddOrEven([]))