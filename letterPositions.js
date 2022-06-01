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

const letterPositions = function (sentence) {
  const results = {}
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i)
    } else {
      results[sentence[i]] = [i]
    }
  }
  return results;
};

const result = letterPositions('lighthouse in the house')
assertArraysEqual(result.i, [1, 11])
