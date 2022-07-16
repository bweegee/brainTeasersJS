/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let max = 0
  let end = 0
  const set = new Set()

  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      while (set.has(s[i])) {
        set.delete(s[end])
        end++
      }
    }
    set.add(s[i])
    const length = i - end + 1
    max = Math.max(max, length)
  }
  return max
}
