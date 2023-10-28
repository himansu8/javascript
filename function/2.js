/*
return:- it give the one output and it is end the function

*/

function check(n1){
    if(n1 ==2){
        return 0
    }
    console.log('after return')
    return 1
}
// console.log(check(2)); // output:- 0

function check(n1){
    if(n1 ==2){
        return 0
    }
    console.log('after return')
    return 1
}
// console.log(check(3)); // output:- after return     1


function z1(a, b, c, d, e, f){
    var n1=a+b+c;
    var n2=d+e+f;
    var z1=n1+n2;
    return (`sum of total ${z1}`);
}
console.log(z1(1,2,3,4,5,6));   // output:-sum of total 21