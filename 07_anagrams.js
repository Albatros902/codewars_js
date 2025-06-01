function allAnagrams(array) {
    let first = array.map(str => str.split('').sort().join(''))

    for (let i = 1; i < array.length; i++) {
        if (first[0] !== first[i]) return false
    }

    return true
}
console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) // true
console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])) // false