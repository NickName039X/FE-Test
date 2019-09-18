class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // 事实上，类的所有方法都定义在类的prototype上面

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }

    toHexString() {
        return 'hex';
    }
}

Object.assign(Point.prototype, {
    f1() { },
    f2() { },
    speakEnglish() { return 'Yes,I can speak English' },
});

function es5Point(x, y) {
    this.x = x;
    this.y = y;

    this.speak = function () {
        return 'speak'
    };

    this.eat = function () {
        return 'eat';
    }
}

var p = new es5Point();
p.speak();





