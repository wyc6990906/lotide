const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅️Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑️Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};
assertArraysEqual([1, 2, 3], [1, 2, 3])
