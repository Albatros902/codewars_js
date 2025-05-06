function disemvowel(str) {
    let str_fix = [];
    str.split('').forEach(function (el){
        if (!/^[aeiouAEIOU]$/.test(el)) {
            str_fix.push(el)
        }
    });
    return str_fix.join('')
}
//2 вариант
//best solution
function disemvowel2(str) {
    return str.replace(/[aeiou]/gi, '');
}