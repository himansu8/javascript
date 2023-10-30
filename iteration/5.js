/*
switch case
Syntax:
    switch(exp){
        case 1:
            //statement
            break
        case 2:
            //statement
            break
            switch(exp){
        case 3:
            //statement
            break
        ..........
            switch(exp){
        case N:
            //statement
            break
        default:
            //statement
            break
    }
*/


var n1=4;
var n2=3;
var symbol="+";
switch(symbol){
    case '+':
    console.log(n1+n2);
    break;

    case '-':
    console.log(n1-n2);
    break;

    default:
    console.log("not a valid option");
    break;
}                //output: 7


//if we dont use break then it will evaluates each and every cases