/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
function isItLong(inputString) {
  if (inputString.length > 20) {
      return "That's a long string!";
  }
}
function isItMedium(inputString) {
  const length = inputString.length;
  if (length >= 10 && length <= 20) {
      return "That's a regular sized string!";
  }
}
function isItShort(inputString) {
  if (inputString.length < 10) {
      return "That's a small string!";
  } else {
      return "That's not a small string!";
  }
}
function howLongIsMyString(inputString) {
  const length = inputString.length;
  if (length > 20) {
      return "That's a long string!";
  } else if (length >= 10) {
      return "That's a regular sized string!";
  } else {
      return "That's a small string!";
  }
}
function personsHeight(name) {
  const instructorHeights = {
      "Shaq": 85,
      "Zooey": 65,
  };
  if (name in instructorHeights) {
      return `Height of ${name}: ${instructorHeights[name]} inches`;
  } else {
      return "I don't know everyone's height!";
  }
}
const testString1 = "Tiny";
const testString2 = "Reasonably long string";
const testString3 = "This is a really long string!";

console.log(isItLong(testString1));
console.log(isItLong(testString2));

console.log(isItMedium(testString1));
console.log(isItMedium(testString2));
console.log(isItMedium(testString3));

console.log(isItShort(testString1));
console.log(isItShort(testString2));

console.log(howLongIsMyString(testString1));
console.log(howLongIsMyString(testString2));

console.log(personsHeight("Shaq"));
console.log(personsHeight("Zooey"));
console.log(personsHeight("John"));




/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof personsHeight === 'undefined') {
  personsHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  personsHeight,
}
