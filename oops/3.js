const bootcamp = {
    fname : "abc",
    lname : "def",
    printthisarrfun: () => {
        console.log(this);
    },
    printthisnormalfun: function  () {
        console.log(this);
    }
}
bootcamp.printthisarrfun();
bootcamp.printthisnormalfun();


/*

Arrow function doesnot bind to their own "this". 

*/