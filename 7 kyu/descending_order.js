function descendingOrder(num){
    return Number(num.toString()
        .split('')
        .sort((a, b) => b - a)
        .join(''))
}