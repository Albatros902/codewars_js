function arrayLeaders(numbers){
    const res = []
    numbers.forEach((el, i, arr) => {
        let sum = arr.slice(i + 1).reduce((sum, el) => sum = sum + el, 0)
        if (el > sum) { res.push(el) }
    })
    return res
}

console.log(arrayLeaders([16,17,4,3,5,2])) // [17, 5, 2]