# 类
## 1.简介
生成实例对象的传统方法是通过构造函数。
```
function Point(x,y){
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
prototype对象的constructor属性，直接指向“类”的本身，这与 ES5 的行为是一致的。
```
Point.prototype.constructor === Point // true
```
类的内部所有定义的方法，都是不可枚举的（non-enumerable）
```
class Point {
  constructor(x, y) {
    // ...
  }

  toString() {
    // ...
  }
}

Object.keys(Point.prototype)
// []
Object.getOwnPropertyNames(Point.prototype)
// ["constructor","toString"]
```
toString方法是Point类内部定义的方法，它是不可枚举的。这一点与 ES5 的行为不一致。
```
var Point = function (x, y) {
  // ...
};

Point.prototype.toString = function() {
  // ...
};

Object.keys(Point.prototype)
// ["toString"]
Object.getOwnPropertyNames(Point.prototype)
```
<b>Object.keys()，该方法返回一个数组</b>
传入对象，返回属性名
```
var obj = {'a':'123','b':'345'};
console.log(Object.keys(obj));  //['a','b']

var obj1 = { 100: "a", 2: "b", 7: "c"};
console.log(Object.keys(obj1)); // console: ["2", "7", "100"]

var obj2 = Object.create({}, { getFoo : { value : function () { return this.foo } } });
obj2.foo = 1;
console.log(Object.keys(obj2)); // console: ["foo"]
```
传入字符串，返回索引
```
var str = 'ab1234';
console.log(Object.keys(obj));  //[0,1,2,3,4,5]
```
构造函数 返回空数组或者属性名
```
  function Pasta(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.toString = function () {
                    return (this.name + ", " + this.age + ", " + this.gender);
            }
    }

    console.log(Object.keys(Pasta)); //console: []

    var spaghetti = new Pasta("Tom", 20, "male");
    console.log(Object.keys(spaghetti)); //console: ["name", "age", "gender", "toString"]
 ```
 数组 返回索引
 ```
  var arr = ["a", "b", "c"];
  console.log(Object.keys(arr)); // console: ["0", "1", "2"]
 ```
 ## 2.严格模式
 类和模块的内部，默认就是严格模式，所以不需要使用use strict指定运行模式。只要你的代码写在类或模块之中，就只有严格模式可用。

考虑到未来所有的代码，其实都是运行在模块之中，所以 ES6 实际上把整个语言升级到了严格模式。

## 3. constructor
constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
```
class Point {
}

// 等同于
class Point {
  constructor() {}
}
```
constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。

```
class Foo {
  constructor() {
    return Object.create(null);
  }
}

new Foo() instanceof Foo
// false
```
constructor函数返回一个全新的对象，结果导致实例对象不是Foo类的实例。

类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。
   
## 4.类的实例对象
与 ES5 一样，实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。
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

var point = new Point(2, 3);

point.toString() // (2, 3)

point.hasOwnProperty('x') // true
point.hasOwnProperty('y') // true
point.hasOwnProperty('toString') // false
point.__proto__.hasOwnProperty('toString') // true
```
