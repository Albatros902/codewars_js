function findUniq(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1]) continue
        else if (arr[i+1] === arr[i+2]) return arr[0]
        else return arr[i+1]
    }
}

console.log(findUniq([ 0, 1, 0, 0 ]))

//best solution
function findUniq2(arr) {
    arr.sort((a,b)=>a-b)
    return arr[0] === arr[1] ? arr.pop() : arr[0]
}