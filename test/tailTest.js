// FUNCTION IMPLEMENTATION
const assert = require('chai').assert
const tail = require('../tail')

const words = ["Yo Yo", "Lighthouse", "Labs"];


// TEST CODE
const result = tail(words)
describe('#tail test groups', () => {
  it('words.length should equal to 3', () => {
    assert.strictEqual(words.length, 3)
  })
  it("should return 'Lighthouse'", () => {
    assert.strictEqual(result[0], 'Lighthouse')
  })
  it("should return 'Labs'", () => {
    assert.strictEqual(result[1], 'Labs')
  })
})

// assertEqual(words.length, 3);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");
