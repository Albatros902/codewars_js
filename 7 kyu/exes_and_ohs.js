function XO(str) {
    let count_X = 0
    let count_O = 0
    if (str.length === 0) return true
    str.split('').forEach(function (el) {
        if (el === "x" || el === "X" )
            count_X++
        else if (el === "o" || el === "O")
            count_O++
    });
    return count_O === count_X;
}