function rowWeights(array){
    let t1 = array.filter((x, i)=> i % 2 === 0).reduce((a, item) => a + item, 0)
    let t2 = array.filter((x, i)=> i % 2 !== 0).reduce((a, item) => a + item, 0)

    return [t1, t2]
}

console.log(rowWeights([70]))                       // [70, 0]
console.log(rowWeights([70,58,75,34,91]))           // [236,92])
console.log(rowWeights([29,83,67,53,19,28,96]))     // [211,164])