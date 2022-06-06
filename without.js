// FUNCTION IMPLEMENTATION
const without = function (source, itemsToRemove) {
  let restOfItems = source;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        restOfItems.splice(i, 1);
      }
    }
  }
  return restOfItems;
};


module.exports = without
