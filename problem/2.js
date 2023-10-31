/*
given a number N, print all even numbers
N=10;
output: [0,2,4,6,8]
*/
//method 1
// function evenArr(N){
//     var arr =[];
//     for (i=0; i<N; i+=2){
//     arr.push(i)
//     }
//     return arr;
// }
// var res = evenArr(10);
// console.log(res);

//method 2

function evenArr(N){
    var arr =[];
    for (i=0; i<N; i++){
        if(i % 2 ==0){
    arr.push(i)
        }
    }
    return arr;
}
var res = evenArr(10);
console.log(res);