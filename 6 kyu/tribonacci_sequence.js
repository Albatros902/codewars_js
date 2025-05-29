function tribonacci(signature,n){
    switch (n){
        case 0: return []
        case 1: return [signature[0]]
        case 2: return [signature[0], signature[1]]
        case 3: return [signature[0], signature[1], signature[2]]
    }

    let i = 3
    while (i < n) {
        let sum =  signature.slice(-3).reduce((el, sum) => sum = el + sum)
        signature.push(sum)
        i++
    }
    return signature
}

console.log(tribonacci([1,1,1], 1)) //[1]

//best solution
function tribonacci2(signature,n){
    for (var i = 0; i < n-3; i++) { // iterate n times
        signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
    }
    return signature.slice(0, n); //return trib - length of n
}