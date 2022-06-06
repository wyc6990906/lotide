const {assert} = require("chai")
const takeUntil = require('../takeUntil')
//test code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
describe('#takeUntil test', () => {
  it("returns [ 1, 2, 5, 7, 2 ]  when doing the takeUtil function", () => {
    //seems like deepEqual can compare Array/Object are equal or no
    assert.deepEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2])
  })
  it("returns [\"I've\", 'been', 'to', 'Hollywood']  when doing the takeUtil function", () => {
    //seems like deepEqual can compare Array/Object are equal or no
    assert.deepEqual(takeUntil(data2, x => x === ','), ["I've", 'been', 'to', 'Hollywood'])
  })
})





