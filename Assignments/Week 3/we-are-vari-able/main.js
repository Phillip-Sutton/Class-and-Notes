/******************
 * YOUR CODE BELOW *
 ******************/
const myFirstName = 'Phillip';
console.log(myFirstName);

const myLastName = "Sutton";
console.log(myLastName);

const myFavoriteCeleb = "Sylvester Stallone";
console.log(myFavoriteCeleb);

const mySentence = `Hello, my name is ${myFirstName} ${myLastName}, and my favorite celebrity is ${myFavoriteCeleb}.`;

const myLuckyNum = 7; // Convert to a number
const myAge = 45; // Convert to a number
const myHeight = 68; // Convert to a number
const myFavoriteYear = "1987"; // This can remain a string

const mySum = 5 + 2317 + 36;
console.log(`The sum is: ${mySum}`);

const myProduct = 232 * 43 / 2 + 4;
console.log(`The value of myProduct is: ${myProduct}`);

const myHeightAndAge = myAge + myHeight; // Numeric sum
console.log(`My height and age combined: ${myHeightAndAge}`);


/*********************************************************************************************************************

 * CODE BELOW HERE IS FOR INTERNAL USE ONLY! IT ENSURES THAT THE TESTING *
 * CAN READ AND EVALUATE YOUR CODE. *
 * DON'T CHANGE ANYTHING BELOW HERE, PLEASE! *

 *********************************************************************************************************************/

if (typeof myFirstName === "undefined") {
  myFirstName = undefined;
}

if (typeof myLastName === "undefined") {
  myLastName = undefined;
}

if (typeof myFavoriteCeleb === "undefined") {
  myFavoriteCeleb = undefined;
}

if (typeof mySentence === "undefined") {
  mySentence = undefined;
}

if (typeof myLuckyNum === "undefined") {
  myLuckyNum = undefined;
}

if (typeof myAge === "undefined") {
  myMentalAge = undefined;
}

if (typeof myHeight === "undefined") {
  myHeight = undefined;
}

if (typeof myFavoriteYear === "undefined") {
  myFavoriteYear = undefined;
}

if (typeof mySum === "undefined") {
  mySum = undefined;
}

if (typeof myProduct === "undefined") {
  myProduct = undefined;
}

if (typeof myHeightAndAge === "undefined") {
  myHeightAndAge = undefined;
}

module.exports = {
  myFirstName,
  myLastName,
  myFavoriteCeleb,
  mySentence,
  myLuckyNum,
  myAge,
  myHeight,
  myFavoriteYear,
  mySum,
  myProduct,
  myHeightAndAge,
};
