//找出数组 arr 中重复出现过的元素

//判断第一次和最后一次出现的坐标是否相同
function duplicates(arr) {
    var result=[];
    arr.forEach(function(element){
        if(arr.indexOf(element)!=arr.lastIndexOf(element) && result.indexOf(element)==-1){
            result.push(element);
        }
    })
    return result;
}


// 将传入的数组arr中的每一个元素value当作另外一个新数组b的key，
// 然后遍历arr去访问b[value]，若b[value]不存在，则将b[value]设置为1，若b[value]存在，则将其加1。
// 可以想象，若arr中数组没有重复的元素，则b数组中所有元素均为1；若arr数组中存在重复的元素，
// 则在第二次访问该b[value]时，b[value]会加1，其值就为2了。最后遍历b数组，将其值大于1的元素的key存入另一个数组a中，就得到了arr中重复的元素。
function duplicates2(arr) {
    var a=[],
        b=[];
    for(var i=0;i<arr.length;i++){
        if(!b[arr[i]]){
            b[arr[i]]=1;
        }else{
            b[arr[i]]++;
        }
    }
    for(var i = 0; i < b.length; i++){
        if(b[i] > 1){
            a.push(i);
        }
    }
    return a;
}

// 先排序然后再判断相邻元素是否相等
function duplicates3(arr) {
    var a=arr.sort();
    var b=[];
    for(var i=0;i<a.length;i++ ){
        if(a[i]===a[i+1] && b.indexOf(a[i])==-1){
            b.push(a[i]);
        }
    }
    return b;
}