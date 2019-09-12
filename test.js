var fs = require("fs");

// 异步读取
fs.readFile('./assets/input.js', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("异步读取: " + data.toString());
});

// 同步读取
// var data = fs.readFileSync('input.js');
// console.log("同步读取: " + data.toString());

// console.log("程序执行完毕。");
