function findOdd(arr) {
    let res = arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
    for(let prop in res) {
        if(res[prop] % 2 !== 0) return Number(prop);
    }
}

//best solution
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
function findOdd2(A) {
    return A.reduce((a, b) => a ^ b) // ^ -> XOR
}
