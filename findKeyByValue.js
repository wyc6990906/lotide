// FUNCTION IMPLEMENTATION
const findKeyByValue = function (obj, value) {
  let result = ''
  const keys = Object.keys(obj)
  keys.map(item => {
    if (obj[item] === value) {
      // console.log(obj[item],item)
      result = item
      console.log(result)
    } else {
      result = undefined
    }
  })
  return result
}

module.exports = findKeyByValue
