function persistence(num) {
    let [count, sum] = [0, 1]
    num = num.toString().split('').map(Number)
    while (num.length > 1) {
        sum = 1
        for (let i = 0; i < num.length; i++) {
            sum *= num[i]
        }
        num = sum.toString().split('').map(Number)
        count++
    }
    return count
}

//best solution
function persistence2(num) {
    var times = 0;

    num = num.toString();

    while (num.length > 1) {
        times++;
        num = num.split('').reduce((a, b) => a * b).toString();
    }

    return times;
}