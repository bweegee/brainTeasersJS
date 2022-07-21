/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  let longest = strs.shift()
  for (let i = 0; i < strs.length; i++) {
    let charIndex = 0
    if (strs[i] === longest) continue
    while (strs[i][charIndex] === longest[charIndex]) {
      charIndex++
    }
    if (charIndex === 0) return ""
    longest = longest.slice(0, charIndex)
  }
  return longest
}
