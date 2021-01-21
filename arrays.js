var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, "") {
  chocolateBars.unshift("milkduds")
}

function destructivelyAddElementToBeginningOfArray(chocolateBars,) {
  chocolateBars = ["milkyway", ...chocolateBars]
}