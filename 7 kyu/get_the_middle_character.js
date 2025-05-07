//my solution
function getMiddle(s) {
    let text_mid = []
    let text_arr = s.split('')
    if ((text_arr.length % 2) === 0) {
        text_arr.length = (text_arr.length/2)+1
        text_mid = text_arr.splice(-2, 2)
        return text_mid.toString()
    } else {
        text_arr.length = Math.ceil(text_arr.length / 2)
        text_mid = text_arr.splice(-1, 1)
        return text_mid.join("")
    }
}
//best solution
function getMiddle2(s) {
    return s.substring((s.length-1)/2, s.length/2+1)
}