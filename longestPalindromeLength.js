/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
  const map = new Map()
  let hasOdd = false
  let total = 0
  for (const char of s) {
    if (!map.has(char)) {
      map.set(char, 1)
    } else {
      map.set(char, map.get(char) + 1)
    }
  }
  map.forEach((v, k) => {
    if (v % 2 !== 0) {
      hasOdd = true
      total += v - 1
    } else {
      total += v
    }
  })
  if (hasOdd) return total + 1
  return total
}
