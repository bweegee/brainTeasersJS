/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = (s) => {
  let result = 0
  for (let i = 0; i < s.length; i++) {
    let left = i
    let right = i
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      result += 1
      left -= 1
      right += 1
    }
    left = i
    right = i + 1
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      result += 1
      left -= 1
      right += 1
    }
  }
  return result
}
