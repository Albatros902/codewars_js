function findOutlier(integers) {
    let odd = integers.filter((el) => el % 2 !== 0)
    let even = integers.filter((el) => el % 2 === 0)
    return odd.length < even.length ? odd[0] : even [0]
}