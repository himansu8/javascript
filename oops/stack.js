class stack{
    constructor(){
        this.items = []
    }
    push(element){
        this.items.push(element)
        return this;
;    }
size(){
    console.log(this.items.length);
    return this;
}
show(){
    // console.log(this.items);
    console.log("----------")
    for( let i=this.items.length -1; i>=0; i--){
    console.log(this.items[i])
    }
    console.log("----------")
    return this;
}
pop(){
//     if(this.items.length !=0){
//         this.items.pop();
//     }
//   else {
//     console.log("stack is empty");
//   }
  this.items.length !=0 ?  this.items.pop() : console.log("stack is empty")
  return this;
}
clear(){
    this.items = [];
    return this;
}
isEmpty(){
    // if(this.items.length == 0){
    //     console.log("empty")
    // }
    // else {
    //     console.log("not empty")
    // }
    this.items.length == 0 ?  console.log("empty") : console.log("not empty")
    return this;
}
peak(){
    // if(this.items.length ==0 ){
    //     console.log("empty")
    // }
    // else {
    // let lastindex =  this.items.length -1
    // console.log(this.items[lastindex]);
    // }
    this.items.length == 0 ?  console.log("empty") : console.log(this.items[this.items.length -1])
    return this;
}
}
let s1 = new stack();
// s1.push(1);
// s1.push(2);
// s1.push(3);
// s1.size();
// s1.show();
// s1.pop();
// s1.show();
// // s1.clear();
// // s1.show();
// s1.peak();
// s1.isEmpty();

s1.push(4).push(5).show().pop().show()



