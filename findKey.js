// FUNCTION IMPLEMENTATION
const findKey = function (object, callback) {
  for (const objectKey in object) {
    // console.log(objectKey, object[objectKey])
    if (callback(object[objectKey])) {
      return objectKey
    }
  }
}

module.exports = findKey
