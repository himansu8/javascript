// call method

const person = {
    fname : "xyz",
    lname : "123",
    getfullname(){
        console.log(` Hi ${this.fname} ${this.lname}`);
    }
}
person.getfullname(); // normal behavior

const diffobj = {
    fname : "Himansu",
    lname : "Sahu",
}
person.getfullname.call(diffobj); // change the reference by using call()
