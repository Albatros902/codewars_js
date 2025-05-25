function digPow(n, p){
    let res = n.toString().split('').map(Number)
    let res_2 = 0
    for (let i = 0; i <res.length; i++) {
        res_2 += res[i] ** (p + i)
    }
    res_2 = res_2 / n
    return res_2 % 1 === 0 ? res_2 : -1
}

console.log(digPow(46288, 3))