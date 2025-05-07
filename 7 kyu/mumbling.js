//my solution
function accum(s) {
    let s_index = ''
    s = s.toLowerCase().split('')
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < i+1; j++) {
            if (j !== 0) s_index += (s[i])
            else {
                let first_s = s[i].toUpperCase()
                s_index += first_s
            }
            }
        s_index += '-'
        }
    return s_index.slice(0, -1)
}

//best solution
function accum2(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}