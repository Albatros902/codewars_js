function sixToast(num) {
    return num === 6 ? 0 : num > 6 ? (num -= 6) : -(num -= 6);
}