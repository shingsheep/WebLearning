function isPrimeNum(num){
    for (var i = 2; i < num/2+1; i++) {
        if (num%i==0){
            return false;
        }
    };
    return true;
}
var n = 5;
var arr=new Array(n);
arr[0]=0;
var sum=0;
for(var i=1;i<n;i++){
    arr[i]=2*i-1;
    if(isPrimeNum(arr[i])){
        sum+=arr[i];
    }
}
console.log(sum);