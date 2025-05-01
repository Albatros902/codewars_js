function removeEveryOther(arr) {
    for (let i=1; i <= arr.length; i++) {
        arr.splice(i, 1)
    }
    return arr
}