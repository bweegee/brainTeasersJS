/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
  const arr = [...s]
  for (let i = 0; i < t.length; i++) {
    if (t[i] === arr[0]) {
      arr.shift()
      if (!arr.length) break
    }
  }
  return arr.length === 0
}
