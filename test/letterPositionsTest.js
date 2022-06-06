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
