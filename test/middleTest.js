// FUNCTION IMPLEMENTATION
const eqArrays = require('../eqArrays')
const assertArraysEqual = require("../assertArraysEqual")

// ACTUAL FUNCTION
const middle = require("../middle")

// TEST CODE
// assertArraysEqual(middle([1]), [])
// assertArraysEqual(middle([1, 2]), [])
assertArraysEqual(middle([1, 2, 3]), [2])
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
