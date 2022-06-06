const map = function (array, callback) {
  const results = []
  for (let item of array) {
    results.push(callback(item));
  }

  return results
}
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

//Test
const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, word => word[0]),['g','c','t','m','t'])

module.exports = map
