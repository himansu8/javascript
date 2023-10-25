function table(i){
if(i > 10) return
console.log(`2 * ${i} = ${2*i}`);
 return table(i+1)
}
table(1);