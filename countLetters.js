// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`)
  } else {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`)
  }
};
//countLetters
const countLetters = function (str) {
//  Remember that we can skip and not count spaces, as seen here.
  const result = {}
  for (const letter of str) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1
      } else {
        result[letter] = 1
      }
    }
  }
  console.log(result)
  return result
}

// TEST CODE
assertEqual(countLetters("lighthouse in the house")['t'], 2);

module.exports = countLetters
