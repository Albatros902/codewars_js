function countBits (n){
    return n.toString(2)
        .split('0')
        .join('')
        //or
        // .split('0')
        // .sort((a, b) => a - b)
        // .map(Number)
        // .filter(el => el === 1)
        .length
}