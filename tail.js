// FUNCTION IMPLEMENTATION

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
// assertEqual(words.length, 3);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");


module.exports = tail
