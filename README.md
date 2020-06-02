
### js四则运算

　　'1' + 8 = '18' //字符串+数字

　　1 + '8' = '18' //数字加字符串

　　2 - '1' = 1 //数字减字符串
 
### 将字符串数字转化为number类型的数字最快的办法 +str(如果str是数字，否则转换结果为NaN)

+在这里代表一元正号运算符

 

### 使用关键字new创建新实例对象经过了以下几步：

创建一个新对象
将新对象的_proto_指向构造函数的prototype对象
将构造函数的作用域赋值给新对象 （也就是this指向新对象）
执行构造函数中的代码（为这个新对象添加属性）
返回新的对象
 

var Obj = {};
 
Obj._proto_ =  Person.prototype();
 
Person.call(Obj);
 

 

### 当this遇到return。如果返回值是一个对象，那么this指向的就是返回的对象，如果返回值不是一个对象那么this还是指向函数的实例。

//null比较特殊，这里null还是指向函数的对象
```
window.name = 'pk';
function fn() {
    this.user = 'ft';
    console.log(this);
    return null;
}
```
var a = new fn();
console.log({ name: a.name, user: a.user }); //undefind 'ft'
 

### ++代表一元自增操作符，--代表一元自减运算符，在运算时存在隐式转换
 
### js中Falsy 的值有 0, ‘’, false, NaN, null, undefined
 
### Boolean(new Boolean(false)) 的结果是什么？
　　答案是true，解释如下：

### alert(value)会将value转换成字符串

 

### 在正则表达式中?表示非贪婪匹配，*表示贪婪匹配。

 

### 一般来说，不要在promise的then里面定义reject状态的回调函数，总是使用catch方法。

 

### js中call()的用法？

A.call(B,x,y);

1。改变函数A的this的指向，使其指向B

2。把A函数放到B中执行，x，y是函数A的参数。

 

### 显示页面轮廓 [].forEach.call($$("*"),function(a){a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)})


 