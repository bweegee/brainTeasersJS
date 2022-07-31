/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      const count = map.get(s[i]) + 1
      map.set(s[i], count)
    } else {
      map.set(s[i], 1)
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (!map.has(t[i])) return false
    const count = map.get(t[i]) - 1
    if (count === 0) map.delete(t[i])
    else map.set(t[i], count)
  }
  if (map.size) return false
  return true
}
