//bind method

const person = {
    fname : "xyz",
    lname : "123",
    getfullname(){
        console.log(` Hi ${this.fname} ${this.lname}`);
    }
}
const diffobj = {
    fname : "Himansu",
    lname : "Sahu",
}

//call method
person.getfullname.call(diffobj); 

//bind method
const bindgetfullname = person.getfullname.bind(diffobj);
bindgetfullname();
bindgetfullname();
bindgetfullname();
bindgetfullname();


// bind will return a new function which is used for multiple times

// but call will immediately invoke the function