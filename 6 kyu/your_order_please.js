//best solution
function order(words){
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2"))