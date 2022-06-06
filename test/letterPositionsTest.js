// const eqArrays = function (arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };
// const assertArraysEqual = function (arrayOne, arrayTwo) {
//   if (eqArrays(arrayOne, arrayTwo)) {
//     console.log(`✅️Assertion Passed: ${arrayOne} === ${arrayTwo}`);
//   } else {
//     console.log(`🛑️Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
//   }
// };
const {assert} = require("chai")
const letterPositions = require("../letterPositions")
//Test code
// const result = letterPositions('lighthouse in the house')
// assertArraysEqual(result.i, [1, 11])
describe('#letterPositions test', () => {
  it("returns [1, 11] when argument is 'lighthouse in the house'.i", () => {
    assert.deepEqual(letterPositions('lighthouse in the house').i, [1, 11])
  })
})
