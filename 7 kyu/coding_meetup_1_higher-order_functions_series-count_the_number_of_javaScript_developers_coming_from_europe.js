function countDevelopers(list) {
    let sum = 0
    for (let i = 0; i < list.length; i++) {
        if (list[i].language === 'JavaScript' && list[i].continent === 'Europe') {sum++}
    }
    return sum
}

//best solution
function countDevelopers2(list) {
    return list.filter(dev => dev.continent === 'Europe' && dev.language === 'JavaScript').length
}

const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
]

const list2 = [
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 19, language: 'HTML' },
    { firstName: 'Lukas', lastName: 'R.', country: 'Austria', continent: 'Europe', age: 89, language: 'HTML' }
]

console.log(countDevelopers(list1)) // 1
console.log(countDevelopers(list2)) // 0