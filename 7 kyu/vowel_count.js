function getCount(str) {
    let x = 0
    str.split('').forEach(function (el){
        if (/^[aeiouAEIOU]$/.test(el)) x++
    });
    return x
}