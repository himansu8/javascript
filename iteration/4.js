/*
break and condition keyword
break stops the iteration

continue skip the current iteration
*/
// var i=1;
// while(i<=5){
//     console.log(i);
//     i++
//     if(i==3) break;
// }     //output: 1 2 because when i value is 3 it break the condition

// var i=1;
// while(i<=5){
//     console.log(i);
//     i++
//     if(i==3) 
//     break;
// } 
// console.log("-----------");
// console.log(i)            //output 1 2 -------3

// var i=1;
// while(i<=5){
//     console.log(i);
//     if(i==3) break;
//     i++
// } 
// console.log("-----------");
// console.log(i)   //output : 1 2 3 -----3



//contunue
// it skip the iteration
// var i=1;
// while(i<=5){
//     console.log(i);
//     if(i==3) continue;
//     i++
// } 
// console.log("-----------");
// console.log(i)   //output: 33333333333333333333333333

var i=1;
while(i<=5){
    if(i==3){
        i++;
    // console.log(i);
    continue;
    }
    console.log(i);
    i++
}                         //1 2 4 5
/*
iteration 1: i=1; 1; 2
iteration 2: i=2; 2; 3
iteration 3: i=3; true 4  cont
iteration 4: i=4; 4; 5
iteration 5: i=5; 5; 6
iteration 6: i=6; exit the loop
*/
