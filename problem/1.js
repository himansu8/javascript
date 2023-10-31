/*
str='javascript'
WAP to print the even chracters
output= 'vsrp'
*/

function evenWords(str){
    var evenStr = '';
    for(i=0;i<str.length;i+=2){
        // console.log(str[i]);
        evenStr += str[i];
    }
    return evenStr;
}
var res=evenWords('javascript')
console.log(res);