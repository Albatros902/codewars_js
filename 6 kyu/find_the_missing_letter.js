function findMissingLetter(array){
    let alp = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let alp_up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    let start_index = 0
    for (let i = 0; i < alp.length; i++) {
        if (array[0] === alp[i]) {start_index = i}
        else if (array[0] === alp_up[i]) {start_index = i}
    }
    if (array[0].toLowerCase() === array[0]) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] !== alp[start_index]) {return alp[start_index]}
        start_index++
    }}
    else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] !== alp_up[start_index]) {return alp_up[start_index]}
            start_index++
        }}

}

//best solution
function findMissingLetter2(array) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const start = alphabet.indexOf(array[0]);
    return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
};