function digitalRoot(n) {
    n = n = n.toString().split('').map(Number)
    while (n.length > 1) {
        let sum = 0
        for (let i = 0; i < n.length; i++) {
            sum += n[i]
        }
        n = sum.toString().split('').map(Number)
    }
    return n[0]
}

//best solution
function digitalRoot2(n) {
    return (n - 1) % 9 + 1;
}