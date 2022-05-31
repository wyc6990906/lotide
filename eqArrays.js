// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`)
  } else {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`)
  }
};

const eqArrays = function (arrayOne, arrayTwo) {
  let equal = false;
  if (arrayOne.length !== arrayTwo.length) {
    equal = false
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      equal = arrayOne[i] === arrayTwo[i];
    }
  }
  return equal;
}


// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)
