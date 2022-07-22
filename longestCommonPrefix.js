/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  const alphaSort = strs.sort((a, b) => a - b)
  if (alphaSort[0][0] !== alphaSort[strs.length - 1][0]) return ""
  const first = alphaSort.shift()
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < alphaSort.length; j++) {
      if (first[i] !== alphaSort[j][i]) return first.slice(0, i)
    }
  }
  return first
}
