/*
find the maximum number in an array.
arr=[5,1,2,9,0,3]
output: 9
*/

function getMax(arr) {
    var max = arr[0]
    for (i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
var res = getMax([5, 1, 2, 9, 0, 3]);
console.log(res)