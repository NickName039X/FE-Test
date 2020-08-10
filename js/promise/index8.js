Promise.resolve(1)
.then(2)
.then(Promise.resolve(3))
.then(console.log)
//1 传非函数值会发生穿透