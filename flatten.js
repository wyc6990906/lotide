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

module.exports = flatten
