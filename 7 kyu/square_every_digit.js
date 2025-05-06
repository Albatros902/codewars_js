function squareDigits(num){
    let num_digit = []
    num.toString()
        .split('')
        .forEach(function (el){
            el **= 2
            num_digit.push(el)
        });
    num_digit = Number(num_digit.join(''))
   return num_digit
}