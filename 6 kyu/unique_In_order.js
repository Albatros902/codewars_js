function uniqueInOrder(iterable) {
    let last = ''
    let res = []
    for (let i of iterable) {
        if (last !== i) {
            last = i
            res.push(i)
        }
    }
    return res
}


console.log(uniqueInOrder('AAAABBBCCDAABBB'))