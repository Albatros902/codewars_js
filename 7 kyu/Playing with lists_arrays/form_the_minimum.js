function minValue(values){
    return Number([...new Set(values.sort((a, b) => a - b))].join(''))
}

console.log(minValue([5, 7, 9, 5, 7]))              //  579
console.log(minValue([6, 7, 8, 7, 6, 6]))           //  678
console.log(minValue([5, 6, 9, 9, 7, 6, 4]))        //  45679
console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]))  //  134679