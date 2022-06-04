// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`)
  } else {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`)
  }
};

const eqArrays = function (array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
          if (!eqArrays(array1[i], array2[i])) {
            return false
          }
        } else {
          return false;
        }
      }
    }
    return true;
  } else {
    return false;
  }
};


// TEST CODE
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true)
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false)
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false)
