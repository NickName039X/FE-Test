const square = v => v * v
const double = v => v * 2
const addOne = v => v + 1
const pipe = (...fns) => param => fns.reduce((pre, fn) => fn(pre), param)
const res = pipe(square, double, addOne)
console.log(res(3)) // 19; addOne(double(square(3)))


function test(...x){//es6 不定参数
    console.log(...x);
    console.log(typeof x);
    console.log(Array.isArray(x));
    console.log(x.length);
    console.log('arguments:=>',arguments);
    console.log(Object.prototype.toString.call(x));
}
test(1,2,3);