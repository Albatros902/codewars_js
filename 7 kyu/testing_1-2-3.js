var number = function(array){
    let res = []
    for (let i = 0; i < array.length; i++) {
        res.push(`${i+1}: ${array[i]}`)
    }
    return res
}

console.log(number(['a', 'b', 'c'])) // ['1: a', '2: b', '3: c']