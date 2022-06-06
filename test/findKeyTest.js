// FUNCTION IMPLEMENTATION
const {assert} = require('chai')
const findKey = require('../findKey')
//Testing code
const result = findKey({
  "Blue Hill": {stars: 1},
  "Akaleri": {stars: 3},
  "noma": {stars: 2},
  "elBulli": {stars: 3},
  "Ora": {stars: 2},
  "Akelarre": {stars: 3}
}, x => x.stars === 2) // => "noma"
const result2 = findKey({
  "Blue Hill": {stars: 1},
  "Akaleri": {stars: 3},
  "noma": {stars: 2},
  "elBulli": {stars: 3},
  "Ora": {stars: 2},
  "Akelarre": {stars: 3}
}, x => x.stars === 1)  // => Blue Hill
describe('#findKey test', () => {
  it("returns noma for result", () => {
    assert.equal(result, "noma")
  })
  it("returns Blue Hill for result2", () => {
    assert.equal(result2, "Blue Hill")
  })
})

