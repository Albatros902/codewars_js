function highestFrequency(array) {
    const map = {}
    let maxFreq = 0
    let maxFreqstr = array[0]
    for (let i = 0; i < array.length; i++) {
        if (map[array[i]]) {
            map[array[i]]++
        } else {
            map[array[i]] = 1
        }
        if (map[array[i]] > maxFreq) {
            maxFreq = map[array[i]]
            maxFreqstr = array[i]
        }
    }
    return maxFreqstr 
}
console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ])) // -> ghi
