// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`)
  } else {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`)
  }
};
//Copy "eqArrays" function
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i; j <= i; j++) {
      if (arr1[i] !== arr2[j]) {
        return false
      }
    }
  }
  return true
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  }
  for (let key in object1) {
    //Checking if array is array
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key]))
        //if array NOT array than return false
        return false;
    } else if (typeof object1[key] === "object") {
      //if type is object than return true
      return eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ ✅ ✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


//Test code
const cd = {c: "1", d: ["2", 3]};
const dc = {d: ["2", 3], c: "1"};
assertEqual(eqObjects(cd, dc), true) // => true
const cd2 = {c: "1", d: ["2", 3, 4]};
// eqObjects(cd, cd2); // => false

assertObjectsEqual({a: '1', b: 2}, {a: '1', b: 2});
assertObjectsEqual({a: '1', b: 2}, {a: '1', b: 3});
assertObjectsEqual({a: '1', b: 2}, {a: '1'});
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);
