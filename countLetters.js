// FUNCTION IMPLEMENTATION
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


module.exports = countLetters
