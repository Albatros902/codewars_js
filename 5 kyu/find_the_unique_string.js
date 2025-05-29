function findUniq(arr) {
    for (let i = 0; i < arr.length; i++) {
        let el = [...new Set(arr[i].toLowerCase())].sort().toString()
        let el_2 = arr[i+1] === undefined ? ''
            : [...new Set(arr[i+1].toLowerCase())]
                .sort()
                .toString()
        if ([...new Set(arr[0].toLowerCase())].sort().toString() !== [...new Set(arr[1].toLowerCase())].sort().toString() &&
            [...new Set(arr[1].toLowerCase())].sort().toString() === [...new Set(arr[2].toLowerCase())].sort().toString()) {
            return arr[i]
        }
        if (el !== el_2) {
            return arr[i+1]
        }
    }
}

console.log(findUniq([ 'Aaaa', 'Aa', 'Aa', 'Aa', 'Aaaa', 'Aa', 'BbBb' ]))
console.log(findUniq([ 'silvia', 'vasili', 'victor' ]))
console.log(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]))
console.log(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]))