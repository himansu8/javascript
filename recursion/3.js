function fun(x, y){
if(x == 0) return y;
return fun(x-1, x+y);
}
console.log(fun(4,3));