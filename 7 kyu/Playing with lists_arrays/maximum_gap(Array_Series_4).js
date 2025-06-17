function maxGap (numbers){
    numbers.sort((a, b) => b - a)
    let res = numbers[0] - numbers[1]
    for (let i = 1; i < numbers.length; i++) {
        let sum = +(numbers[i] - numbers[i+1])
        if (res < sum) { res = sum}
    }
    return res
}


console.log(maxGap([24,299,131,14,26,25]))      // 168
console.log(maxGap([-3,-27,-4,-2]))             // 23
console.log(maxGap([-7,-42,-809,-14,-12]))      // 767
console.log(maxGap([12,-5,-7,0,290]))           // 278
console.log(maxGap([-54,37,0,64,-15,640,0]))    // 576