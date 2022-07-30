/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  if (numRows === 1) return s
  let string = ""
  for (let i = 0; i < numRows; i++) {
    const formula = (numRows - 1) * 2
    for (let j = i; j < s.length; j += formula) {
      string += s[j]
      if (i > 0 && i < numRows - 1 && j + formula - 2 * i < s.length) {
        string += s[j + formula - 2 * i]
      }
    }
  }
  return string
}
