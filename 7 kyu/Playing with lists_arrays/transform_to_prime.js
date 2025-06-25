function isPrime(num){
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
}

function minimumNumber(numbers){
    let res = 0
    let prime = numbers.reduce((a,b)=>a+b)
    while (isPrime(prime) === false) {
        res++
        prime++
    }
    return res
}

console.log(minimumNumber([3,1,2]))             //1
console.log(minimumNumber([5,2]))               //0
console.log(minimumNumber([1,1,1]))             //0
console.log(minimumNumber([2,12,8,4,6]))        //5
console.log(minimumNumber([50,39,49,6,17,28]))  //2