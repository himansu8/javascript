
/*
function syntax:- 
            function fName(para 1, para 2 ,....){ //function declaration or defination
                     statement 1
                     statement 2
                     ....
            }
            fName(para 1, para 2,....) // (arguments) here we call the function 



*/
//single parameter
function name(n1){
    console.log(`Hello ${n1}, How are you??`)
}
// name('Himansu');  //output- hello Himansu, How are you??

//two parameter
function sum(a,b){
    console.log(`Sum is ${a+b}`)
}
sum(4,5);   // output-Sum is 9