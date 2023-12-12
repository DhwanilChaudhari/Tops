//make a function which take a number and ,
//if number is even then it will print "number is even",
//if odd the it will print "number is odd" and
//if i pass 0 it will print "number is ZERO"
function wnumber(number) {
  if (number === 0) {
    console.log("Number is zero");
  } else if (number % 2 === 0) {
    console.log("Number is even");
  } else {
    console.log("Number is odd");
  }
}
wnumber(2); // Output: Number is even
wnumber(3); // Output: Number is odd
wnumber(0); // Output: Number is ZERO
