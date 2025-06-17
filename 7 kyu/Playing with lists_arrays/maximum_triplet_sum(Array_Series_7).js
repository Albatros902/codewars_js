function maxTriSum(numbers){
    return [...new Set(numbers.sort((a, b) => b - a))].slice(0,3).reduce((a, b) => a + b)
}


console.log(maxTriSum([2,1,8,0,6,4,8,6,2,4]))               // 18
console.log(maxTriSum([-3,-27,-4,-2,-27,-2]))               // -9
console.log(maxTriSum([-14,-12,-7,-42,-809,-14,-12]))       // -33
console.log(maxTriSum([-13,-50,57,13,67,-13,57,108,67]))    // 232