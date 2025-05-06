function highAndLow(numbers) {
    numbers = numbers.split(' ')
        .map(Number)
    let firsthigh = Math.max.apply(Math, numbers);
    let secondmin = Math.min.apply(Math, numbers);;
    return `${firsthigh} ${secondmin}`
}