var obj1={
    a : ["a","b","c",["x","y","z"]],
    b : [
        "abc",
        {
            hello:"world",
            d:function (a,b){
                return{
                    arr:["deepthi","himansu","rajaram",["menon","sahu","sahoo"]],
                    sum : 4+5
                }
            }
        }
        
    ]
}
var output = obj1.b[0]
// console.log(output);  //o/p - abc
var output1 = obj1.b[1].d().arr[2];
// console.log(output1);  //o/p - rajaram
var output2 = obj1.b[1].d().arr[3][0];
// console.log(output2);  //o/p - menon
var output3 = obj1.b[1].hello
// console.log(output3); //o/p- world
var output4 = obj1.b[1].d().sum
console.log(output4); //o/p- 9


/*
1d array : []
2d array : [][]
function : ()
object   : .
*/