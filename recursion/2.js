function fun(n){
if(n==4) return n;
else return 2*fun(n+1);
}
console.log(fun(2));