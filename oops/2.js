console.log("outside the object : ", this);
const bootcamp = {
    fname : "abc",
    printthis: function (){
        console.log("inside the bootcampo object : ", this);
    }
}
bootcamp.printthis();