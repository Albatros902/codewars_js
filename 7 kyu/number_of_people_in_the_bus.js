var number = function(busStops){
    let sum = 0
    for (let i = 0; i < busStops.length; i++) {
        sum = sum + busStops[i][0] - busStops[i][1]
    }
    return sum
}
console.log(number([[10,0],[3,5],[5,8]])) //5
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])) //17
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])) //21
console.log(number([[0,0]])) //0

//best solution
const number2 = (busStops) =>
    busStops.reduce((rem, [on, off]) => rem + on - off, 0);
