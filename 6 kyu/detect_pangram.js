function isPangram(string){
    return [...new Set(string.toLowerCase()
        .replace(/[^a-z]+/g, '')
        .split(''))].length === 26
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"))