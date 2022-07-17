/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if (!needle) return 0
  let index
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 1; j <= needle.length; j++) {
        if (j === needle.length) index = i
        if (needle[j] !== haystack[i + j]) break
      }
      if (typeof index !== "undefined") break
    }
  }
  if (typeof index !== "undefined") return index
  else return -1
}
