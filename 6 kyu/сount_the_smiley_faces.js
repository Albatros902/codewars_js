function countSmileys(arr) {
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i].length){
            case 2: {
                let arr_split = arr[i].split('')
                if ((arr_split[0] === ':' || arr_split[0] === ';') &&
                    (arr_split[1] === ')' || arr_split[1] === 'D')) res++
                break
            }
            case 3: {
                let arr_split = arr[i].split('')
                if ((arr_split[0] === ':' || arr_split[0] === ';') &&
                    (arr_split[1] === '-' || arr_split[1] === '~') &&
                    (arr_split[2] === ')' || arr_split[2] === 'D')) res++
                break
            }
        }
    }
    return res
}

console.log(countSmileys([';*', ';*', ';*', ':$', ';-D']))