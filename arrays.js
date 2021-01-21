var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var addedChocolateBar = "foo";

function addElementToBeginningOfArray(chocolateBars, addedChocolateBar) {
  var moreChocolateBars = [addedChocolateBar,...chocolateBars]
  return moreChocolateBars;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, addedChocolateBar) {
  chocolateBars.unshift(addedChocolateBar);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, addedChocolateBar) {
  var moreChocolateBars = [...chocolateBars,addedChocolateBar]
  return moreChocolateBars;
}

function destructivelyAddElementToEndOfArray(chocolateBars, addedChocolateBar) {
  chocolateBars.push(addedChocolateBar);
  return chocolateBars;
}

function accessElementInArray(chocolateBars) {
  
}

function destructivelyRemoveElementFromBeginningOfArray() {
  
}

function removeElementFromBeginningOfArray () {
  
}

function destructivelyRemoveElementFromEndOfArray() {
  
}

function removeElementFromEndOfArray() {
  
}