// ACTUAL FUNCTION
const middle = function (array) {
  const length = array.length
  let index = 0
  let resultArr = []
  if (length <= 2) {
    return resultArr
  }
  if (length % 2 !== 0) {
    // odd
    index = Math.ceil(length / 2)
    resultArr.push(array[index - 1])
  } else {
    // even
    index = Math.ceil(length / 2)
    resultArr.push(array[index - 1])
    resultArr.push(array[index])
  }
  return resultArr
}

// TEST CODE
// assertArraysEqual(middle([1]), [])
// assertArraysEqual(middle([1, 2]), [])
// assertArraysEqual(middle([1, 2, 3]), [2])
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])

module.exports = middle
