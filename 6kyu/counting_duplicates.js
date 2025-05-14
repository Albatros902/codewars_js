function duplicateCount(text){
    text = text.toLowerCase().split('')
    let res = text.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {})
    let sum = 0
    for(let prop in res) {
        if(res[prop] !== 1) sum++;
    }
    return sum
}


console.log(duplicateCount("Indivisibilities")) // 2