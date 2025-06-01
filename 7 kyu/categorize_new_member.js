function openOrSenior(data){
    let res = []
    let [open, senior] = ['Open', 'Senior']
    data.forEach(el => {
        if (el[0] >= 55 && el[1] > 7) {res.push(senior)}
        else {res.push(open)}
    })
    return res
}

console.log(openOrSenior([[73,7],[89,22],[21,1],[85,25]]))
//                             ['Open', 'Senior', 'Open', 'Senior']

//best solution
function openOrSenior2(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}