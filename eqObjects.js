// FUNCTION IMPLEMENTATION
const eqArrays = require('./eqArrays')
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  }
  for (let key in object1) {
    //Checking if array is array
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key]))
        //if array NOT array than return false
        return false;
    } else if (typeof object1[key] === "object") {
      //if type is object than return true
      return eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false
    }
  }
  return true;
};

module.exports = eqObjects

