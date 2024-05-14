/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/

for (let num = 1; num <= 100; num++) {
  if (num % 3 === 0 && num % 5 === 0) {
      console.log("FizzBuzz");
  } else if (num % 3 === 0) {
      console.log("Fizz");
  } else if (num % 5 === 0) {
      console.log("Buzz");
  } else {
      console.log(num);
  }
};


/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/


if (typeof fizzy === "undefined") {
  fizzy = undefined;
}

module.exports = {
  fizzy,
};
