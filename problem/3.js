/*
WAP to print sum of an array
input:[1,2,3,4,5]
output: 1+2+3+4+5=>15
*/

function sumArr(arr){
    var sum=0;
    for(i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
var res = sumArr([1,2,3,4,5]);
console.log(res);