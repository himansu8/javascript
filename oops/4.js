let person = {
    name : 'abc',
    age : '24',
    getbio : function(){
        return {
            name : "hello",
            b : () => {
                console.log(this.name);
            }
        }
    },
    getbio2 : function(){
        return {
            name : "hello",
            b : function () {
                console.log(this.name);
            }
        }
    },
}
person.getbio().b();   //arrow function
person.getbio2().b();   //normal function


/*
Arrow function doesnot bind to their own "this".it is binding to parents object.


*/