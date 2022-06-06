// FUNCTION IMPLEMENTATION
const {assert} = require('chai')
//countLetters
const countLetters = require('../countLetters')

// TEST CODE
describe('#countLetters test', () => {
  it("returns 2 for lighthouse in the house", () => {
    assert.equal(countLetters('lighthouse in the house')['t'], 2)
  })

})
