// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`๐๐๐Assertion failed: ${actual} !== ${expected}`)
  } else {
    console.log(`โ โ โ Assertion Passed: ${actual} === ${expected}`)
  }
};

module.exports = assertEqual
