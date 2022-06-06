// FUNCTION IMPLEMENTATION
const {assert} = require("chai")
// ACTUAL FUNCTION
const middle = require("../middle")
// TEST CODE
describe('#middle test group', () => {
  it('middle of [1,2,3] is [2]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2])
  })
  it('middle of [1,2,3,4,5] is [3]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])
  })
  it('middle of [1,2,3,4] is [2,3]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])
  })
  it('middle of [1,2,3,4,5,6] is [3,4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  })
})

