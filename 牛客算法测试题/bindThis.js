//封装函数 f，使 f 的 this 指向指定的对象
// bind()方法会创建一个新函数，称为绑定函数，当调用这个绑定函数时，绑定函数会以创建它时传入 bind()方法的第一个参数作为 this，传入 bind() 方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数。
// 因为bind()会创建一个新函数且加上原绑定函数运行时本身的参数，所以可以直接return且无需传入arguments
// 而call和apply为立即调用所以需要用一个匿名函数包装并返回且需要传入原函数参数arguments,arguments为伪数组所以只能使用apply
function bindThis(f, oTarget) {
    if(f.bind){
        return f.bind(oTarget);
    }else{
        return function () {
            return f.apply(oTarget,arguments)
        }
    }
}

function bindThis2(f, oTarget) {
    return function(x,y){
        return f.call(oTarget,x,y);
    };
}