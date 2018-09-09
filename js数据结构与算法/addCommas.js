// 题目：12000000.11 如何将浮点数小数点左边的数每三位加一个逗号，如12,000,000.11?
function commafloat(num){
    return num && num
        .toString().replace(/(\d)(?=(\d{3})+\.)/g,function ($1,$2){
            return $2+',';
        });
}

function commaFloat(num){
    return num.toString().replace(/(\d)(?=(\d{3})+\.)/g,'$1,');
}

//整形匹配千分位
function commaInt(num) {
    //1,2,4,5,678
   // return num.toString().replace(/(\d)(?=(\d{3})+)/g,'$1,');
    return num && num
        .toString().replace(/(?=(?!(\b))(\d{3})+$)/g, ',');
}

function commafy (num) {
    if (isNaN(Number(num))) {
        return num
    }
    if (num && num.toString().indexOf('.') > 0) {
        return num.toString().replace(/(\d)(?=(\d{3})+\.)/g, ($0, $1) => {
            return $1 + ','
        })
    } else {
        return num && num.toString().replace(/(?=(?!(\b))(\d{3})+$)/g, ',')
    }
}