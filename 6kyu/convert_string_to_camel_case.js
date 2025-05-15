function toCamelCase(str){
    if (str === '') return ''
    str = str.split(/([_\W])/).filter((a,i) => i % 2 === 0);
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].split('')
        let first = str[0][0].toUpperCase()
        if (str[i][0] === first && i === 0){
            str[i][0] = str[i][0].toUpperCase()
        }
        else if (i !== 0)
            str[i][0] = str[i][0].toUpperCase()
    }
    return str.join(',').split(',').join('')
}

//best solution
function toCamelCase2(str){
    let arr = str.split('');
    for(i = 0; i < arr.length; i++){
        let letter = arr[i];
        if(letter === '_' || letter === '-') {
            arr[i + 1] = arr[i + 1].toUpperCase();
            arr[i] = '';
        }
    }
    return arr.join('');
}

//best solution with replace
function toCamelCase3(str){
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}