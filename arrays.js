var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var addedChocolateBar = "foo";

function addElementToBeginningOfArray(chocolateBars, addedChocolateBar) {
  
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, addedChocolateBar) {
  chocolateBars.unshift(addedChocolateBar);
  return chocolateBars;
}

function addElementToEndOfArray() {
  return [...chocolateBars,addedChocolateBar];
}

function destructivelyAddElementToEndOfArray() {
  chocolateBars.push(addedChocolateBar);
  return chocolateBars;
}

function accessElementInArray() {
  
}