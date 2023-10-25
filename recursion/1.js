let count=1;
function printTillFive(){
if(count>5) return
    console.log(count);
    count++;
    printTillFive();
}
printTillFive();