function Set() {
    var items={};

    //含有某个值
    this.hasValue=function (value) {
        return value in items;
    };

    this.hasValue2=function (value) {
        return items.hasOwnProperty(value);
    };

    //添加元素
    this.add=function(value){
        if(!this.hasValue(value)){
            items[value]=value;
            return true;
        }
        return false;
    };

    //删除元素
    this.remove=function (value) {
        if(this.hasValue(value)){
            delete items[value];
            return true;
        }
        return false;
    };

    //移除所有元素
    this.clear=function () {
        items={};
    };

    //长度
    this.size=function(){
        return Object.keys(items).length;
    };
    
    this.sizeLegacy=function () {
        var count=0;
        for(var prop in items){
            if(items.hasOwnProperty(prop)){
                count++;
            }
        }
        return count;
    };

    //获取所有元素
    this.values=function(){
        return Object.keys(items);
    };

    this.valuesLegacy=function () {
        var keys=[];
        for(var key in items){
            keys.push(key);
        }
        return keys;
    };

    //并集
    this.union=function (otherSet) {
        var unionSet=new Set();
        var values=this.values();
        for(var i=0;i<values.length;i++){
            unionSet.add(values[i]);
        }
         values=otherSet.values();
        for(var i=0;i<values.length;i++){
            unionSet.add(values[i]);
        }
        return unionSet;
    };

    //交集
    this.intersection=function (otherSet){
        var intersectionSet=new Set();
        var values=this.values();
        for(var i=0;i<values.length;i++){
            console.log(values[i]);
            if(otherSet.hasValue(values[i])){
                console.log(values[i]);
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    };

    //判断是否是一个集合的子集
    this.subset=function (otherSet) {
        if(this.size() > othertSet.size()){
            return false;
        }else{
            var values=this.values();
            for(var i=0;i<values.length;i++){
                if(!otherSet.hasValue(values[i])){
                    return false;
                }
            }
            return true;
        }
    }
}