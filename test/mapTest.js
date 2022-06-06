const {assert} = require("chai")
const map = require("../map")

//Test
const words = ["ground", "control", "to", "major", "tom"];
describe('#map test', () => {
  it("returns ['g', 'c', 't', 'm', 't'] when doing the map function", () => {
    //seems like deepEqual can compare Array/Object are equal or no
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't'])
  })
})

