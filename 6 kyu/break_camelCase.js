function solution(string) {
    return string.split(/(?=[A-Z])/).join(' ')
}

console.log(solution("camelCasingTest"))