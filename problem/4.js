/*
WAP to find the mean of an array

*/
var sum = 0;
function getMean(arr){
    for(var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}
var res = getMean([1,2,3,4,5])
console.log(res);