function scoreThrows(radii){
    let sum_100 = radii.sort((a, b) => b - a)
    let sum = sum_100[0] < 5 ? 100 : 0
    radii.forEach((num) => {
       if (num > 10) {}
       else num >= 5 && num <= 10 ? sum += 5 : sum += 10
    })
    return sum
}

console.log(scoreThrows([1, 2, 3, 4])) ///140
