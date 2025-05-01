function betterThanAverage(classPoints, yourPoints) {
    let sum = classPoints.reduce((a, b) => a + b) / classPoints.length;
    return sum < yourPoints;
    // if (sum < yourPoints)
    //      return true
    // else
    //      return false
}
