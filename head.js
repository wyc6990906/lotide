// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`)
  } else {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`)
  }
};

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
