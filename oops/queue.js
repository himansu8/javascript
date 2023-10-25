class queue{
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
    console.log("----------")
    
        console.log(this.items.join("<-"))

    console.log("----------")
    return this;
}
pop(){
  this.items.length !=0 ?  this.items.shift() : console.log("queue is empty")
  return this;
}
clear(){
    this.items = [];
    return this;
}
isEmpty(){
    this.items.length == 0 ?  console.log("empty") : console.log("not empty")
    return this;
}
front(){
    console.log(`front : ${this.items[0]}`)
    return this;
}
rear(){
    console.log(`rear : ${this.items[this.items.length-1]}`)
    return this;
}
}
let q1 = new queue();
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

q1.push(4).push(5).push(6).show().pop().show().front().rear()



