function fizzBuzz(input){
    if (input%3 == 0) {
        console.log("fizz")
    } else if (input%5 == 0) {
        console.log("buzz") }
        else if (input%5 == 0 && input%3 == 0){
        console.log("fizzBuzz");
    } else {
        console.log(input);
    }

}


module.exports = fizzBuzz
