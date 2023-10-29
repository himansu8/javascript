/*
iteration :- it means repeating
{
    //block
}
for loop :-
syntax 
        for(initialization; termination;inc/dec){
            //statement1 
            ...
        }
flow
    1-initialization
    2-termination condition
    3-block logic
    4-inc/dec
    5-termination logic        
*/
// print 1-5
 for(var i=1;i<=5;i++){
//     console.log(i)            //o/p: 1 2 3 4 5
      }                               
// console.log(i)                //o/p: 6

// print 5-1
for(var i=5;i>=1;i--){
     // console.log(i)            //o/p: 5 4 3 2 1
}                               
   // console.log(i)               //o/p: 0

var str = "CODE"  
/* 
output
index:0 value:C 
index:1 value:O
index:2 value:D 
index:3 value:E
*/ 
for(i=0;i<4;i++){
    console.log(`index:${i} value:${str[i]}`)
}