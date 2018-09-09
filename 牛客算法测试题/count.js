//统计数组 arr 中值等于 item 的元素出现的次数
function count(arr, item) {
    var count=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]===item){
            count++;
        }
    }
    return count;
}

function count2(arr, item) {
    var count=arr.filter(function(e){
        return e===item;
    });
    return count.length;
}

function count3(arr, item) {
    var count=0;
    arr.map(function(e){
        if(e===item){
            count++;
        }
    });
    return count;
}