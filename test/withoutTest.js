// FUNCTION IMPLEMENTATION
const {assert} = require("chai")
const without = require('../without')

//Test
console.log(without([1, 6, 3, 2, 5], [1, 3, 2]));
const words = ["hello", "world", "lighthouse"];

describe('#without test', () => {
  it("returns [ 6,5 ]  when doing the without test1", () => {
    //seems like deepEqual can compare Array/Object are equal or no
    assert.deepEqual(without([1, 6, 3, 2, 5], [1, 3, 2]), [6, 5])
  })
  it("returns [ 'hello', 'world' ]  when doing the without test2", () => {
    //seems like deepEqual can compare Array/Object are equal or no
    assert.deepEqual(without(words, ["lighthouse"]), ['hello', 'world'])
  })
})


