// index.js
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const eqArray = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')
const assertEqual = require('./assertEqual')
const assertObjectsEqual = require('./assertObjectsEqual')
const eqObjects = require('./eqObjects')
const countLetters = require('./countLetters')
const countOnly = require('./countOnly')
const findKey = require('./findKey')



module.exports = {
  head, tail, middle, eqArray, assertArraysEqual, assertEqual, eqObjects,assertObjectsEqual,countLetters,
  countOnly,findKey
}
