
//normal function
//syntax: function fName(){}


// function sum(a,b){
//     //console.log(a+b);
// return a+b;
// }
// var res = sum(2,3);
// console.log(res);          //o/p:5


//............................................
//fat arrow function
//syntax: var fName=()=>{}


// var sum = (a,b)=>{
//     return a+b;
// }
// var res = sum(2,3);
// console.log(res);  //o/p:5
//-------------------------------------------
//fat arrow short

//  var sum =(a,b)=> a+b;
//  console.log(sum(2,3));  //o/p:5


/*
when writing with {} return is must
if you dont use {} return doesnot matter
*/
 //------------------------------
 /*

First Class Functions
1. A function can be assigned to a variable
2. A function can be passed as a argument/parameter 
    to another function
3. A function can return a function
//------------------------------------------------------------

*/
// 1. A function can be assigned to a variable
// var add = (a,b) => a+b;
// console.log(add(1,2));


// 2. A function can be passed as a argument/parameter 
// to another function
// callback

function sayHello(){
    return "Hello";
}
//we are passing sayHello function to greetings function
function greetings(cb, name){ // sayHello(), "Himansu"
    console.log(cb(), name);
}
//function invocation
greetings(sayHello, "Himansu");


// var add = (a,b) => a+b;
// function sum(cb, isSum){ // add function, boolean
//     var res = isSum ? cb(1,2) : 'nothing';
//     console.log(res);
// }
// sum(add, " ");


// 3. A function can return a function

// function sayHello(){
//     return ()=>{
//         console.log('hello');
//     }

//     // return "Coding"
//     // return 1 
// }
// // var res = sayHello();
// // res();
// sayHello()();


// //------------------------------------
// function sayHello(a){
//     return ()=>{
//         console.log(a,'hello');
//     }
//     return "Coding"
//     return 1 
// }
// var res = sayHello();
// res();
// sayHello('hi')();




//---------------------------------

//IIFE (Immediate Invoked Function Expression)

// (function hello(){
//     console.log('hello');
// })()


//---------------------------------
// var i=1;
// if( !(function f() { return false})()){
//     i += typeof f;
// }
// console.log(i);