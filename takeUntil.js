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

const takeUntil = function (array, callback) {
  const resultArr = [];
  for (let item of array) {
    if (!callback(item)) {
      resultArr.push(item);
    } else {
      break
    }
  }
  return resultArr;
};
//test code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2])
