// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`)
  } else {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`)
  }
};
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i; j <= i; j++) {
      if (arr1[i] !== arr2[j]) {
        return false
      }
    }
  }
  return true
}
// Flatten arrays
const flatten = function (nestedArray) {
  let result = []
  if (Array.isArray(nestedArray)) {
    nestedArray.map((item) => {
      if (Array.isArray(item)) {
        item.map(itemIn => {
          result.push(itemIn)
        })
      } else {
        result.push(item)
      }
    })
    return result
  } else {
    return 'You have to enter a valid Array~~~'
  }
}


// TEST CODE
const array1 = [1, 2, [3, 4], 5, [6]]
// console.log(flatten(123))
assertEqual(eqArrays(flatten(array1), [1, 2, 3, 4, 5, 6]), true)
