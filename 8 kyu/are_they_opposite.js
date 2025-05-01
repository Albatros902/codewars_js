function isOpposite(s1,s2){
    if (s1.toLowerCase() !== s2.toLowerCase() || s1 === s2)
        return false;
    for (let i = 0; i < s1.length; i++) {
        if (s1.charAt(i) === s2.charAt(i)) return false  //charAt - возвращает символ по индексу
    }
    return true;
}