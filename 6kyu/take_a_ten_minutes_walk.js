function isValidWalk(walk) {
    let [x, y] = [0, 0]
    walk.forEach(function (el){
        switch (el) {
            case 'n': x++; break;
            case 's': x--; break;
            case 'e': y++; break;
            case 'w': y--; break;
        }
    })
    return x === 0 && y === 0 && walk.length === 10
}