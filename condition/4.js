//if a number is multiple of 3 => Fizz
//if a number is multiple of 5 => Buzz
////if a number is multiple of 3 & 5 => FizzBuzz

var a = 15;
if (a % 15 == 0) { 
    console.log("FizzBuzz") 
}
else if (a % 5 == 0) {
    console.log("Buzz") 
}
else {
    console.log("Fizz")
}