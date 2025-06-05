function capitals(word) {
    let res = []
    word.split('').forEach((el, i) => {
        if (el === word[i].toUpperCase()) {res.push(i)}
    })
    return res
}

console.log(capitals('CodEWaRs'))   // [0,3,4,6]
console.log(capitals('aAbB'))       // [1,3]
console.log(capitals('AAA'))        // [0,1,2]
console.log(capitals(''))           // []