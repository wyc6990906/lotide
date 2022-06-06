// FUNCTION IMPLEMENTATION
const {assert} = require("chai")
// Flatten arrays
const flatten = require('../flatten')


// TEST CODE
const array1 = [1, 2, [3, 4], 5, [6]]
describe('#faltten test', () => {
  it("returns [1, 2, 3, 4, 5, 6] array1", () => {
    assert.deepEqual(flatten(array1), [1, 2, 3, 4, 5, 6])
  })
})

