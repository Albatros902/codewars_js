function findShort(s){
    return s.split(' ')
        .sort((a, b) => a.length - b.length)
        .shift()
        .length
}