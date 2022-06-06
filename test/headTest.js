// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual')

const head = function (array) {
  if (array.length === 0) {
    return undefined
  } else {
    return array[0];
  }
}


// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([5]), 5);
