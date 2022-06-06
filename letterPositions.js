const letterPositions = function (sentence) {
  const results = {}
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) { // have to check if one is already there
      results[sentence[i]].push(i)
    } else {
      results[sentence[i]] = [i]
    }
  }
  return results;
};

module.exports = letterPositions
