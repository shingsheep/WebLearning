# 类
## 1.简介
生成实例对象的传统方法是通过构造函数。
```
unction Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);
```

```
//定义类
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
```
<b>定义“类”的方法的时候，前面不需要加上function这个关键字，直接把函数定义放进去了就可以了。另外，方法之间不需要逗号分隔，加了会报错。</b>

```
class Point {
  // ...
}

typeof Point // "function"
Point === Point.prototype.constructor // true
```
上面代码表明，类的数据类型就是函数，类本身就指向构造函数。  
在类的实例上面调用方法，其实就是调用原型上的方法。  
```
class B {}
let b = new B();

b.constructor === B.prototype.constructor // true
```
b是B类的实例，它的constructor方法就是B类原型的constructor方法。
由于类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。Object.assign方法可以很方便地一次向类添加多个方法。
```
class Point {
  constructor(){
    // ...
  }
}

Object.assign(Point.prototype, {
  toString(){},
  toValue(){}
});
```
**assign**
```
Object.assign(target,…sources) 

var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, target对象自身会被修改
```
如果想要避免o1被改变，需要这样写：
```
var obj = Object.assign({},o1,o2,o3);//给一个空对象作为target，这样改变的是空对象
console.log(obj);// { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1}
```
