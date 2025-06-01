function solution(str, ending){
    return str.slice(-ending.length) === ending || ending === ''
}

console.log(solution('abc', ''))
console.log(solution('abcde', 'abc'))