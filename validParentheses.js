/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const queue = []
  const hash = {
    "(": ")",
    "{": "}",
    "[": "]",
  }
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]]) {
      queue.push(s[i])
    } else {
      if (s[i] !== hash[queue[queue.length - 1]]) {
        return false
      } else {
        queue.pop()
      }
    }
  }
  if (queue.length) return false
  return true
}
