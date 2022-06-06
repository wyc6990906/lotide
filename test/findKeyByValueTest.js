// FUNCTION IMPLEMENTATION
const {assert} = require("chai")
const findKeyByValue = require("../findKeyByValue")

//Test code
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

describe('#findKey test', () => {
  it("returns drama for bestTVShowsByGenre", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")
  })
  it("returns drama for bestTVShowsByGenre", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)
  })
})
