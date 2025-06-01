function divisors(integer) {
    let res = []
    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) { res.push(i) }
    }
    return res.length === 0 ? `${integer} is prime` : res
}

console.log(divisors(2)) // 2 is prime
console.log(divisors(3)) // 3 is prime
console.log(divisors(15)) // [3, 5]
console.log(divisors(12)) // [2, 3, 4, 6]
console.log(divisors(13)) // "13 is prime"