const takeUntil = function (array, callback) {
  const resultArr = [];
  for (let item of array) {
    if (!callback(item)) {
      resultArr.push(item);
    } else {
      break
    }
  }
  return resultArr;
};

module.exports = takeUntil
