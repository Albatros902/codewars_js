let Ball = function(ballType = 'regular') {  //='regular' установка regular у классаballType по умолчанию
    this.ballType = ballType;
};

//решение с использованием класса
class Ball2 {
    constructor(ballType = "regular") {
        this.ballType = ballType;
    }
}