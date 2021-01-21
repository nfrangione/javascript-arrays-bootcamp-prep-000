var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var addedChocolateBar = "milkyway";

function addElementToBeginningOfArray(chocolateBars, addedChocolateBar) {
  chocolateBars = [addedChocolateBar, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, addedChocolateBar) {
  chocolateBars.unshift(addedChocolateBar);
  return chocolateBars;
}