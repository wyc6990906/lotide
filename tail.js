// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`)
  } else {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`)
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
const tail = function (array) {
  if (array.length === 0 || array.length === 1) {
    return []
  } else {
    return array.slice(1)
  }
}

// TEST CODE
const result = tail(words)
assertEqual(words.length, 3);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
