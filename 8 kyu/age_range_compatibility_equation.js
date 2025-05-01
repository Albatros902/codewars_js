function datingRange(age){
    let min = 0;
    let max = 0;
    if (age > 14) {
        min = Math.floor((age / 2) + 7);
        max = Math.floor(2 * (age - 7));
    } else {
        min = Math.floor(age - 0.10 * age);
        max = Math.floor(age + 0.10 * age);
    }
    let min_max = `${min}-${max}`;
    return min_max
}