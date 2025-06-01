function printerError(str) {
    str = str.split('').sort().join('')
    let str_error = str.slice(str.lastIndexOf('m') + 1, str.length)
    return `${str_error.length}/${str.length}`
}

console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'))

//best solution
function printerError2(str){
    return `${str.replace(/[a-m]/gi, "").length}/${str.length}`
}