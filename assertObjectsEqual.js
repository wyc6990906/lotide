//main work
const eqObjects = require('./eqObjects')
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`โ โ โ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`๐๐๐Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual

