function isTriangle(a,b,c){
    if (a+b>c && b+c>a && c+a>b)
        return a * b * c > 0;
    else return false
}