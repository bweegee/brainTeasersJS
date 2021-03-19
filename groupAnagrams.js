/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const anagrams = []
  const dict = {}
  let count = 0
  const sorted = (string) => [...string].sort().join('')
  for (let i = 0; i < strs.length; i++) {
    if (anagrams.length === 0) {
      anagrams.push([strs[i]])
      dict[sorted(strs[i])] = count
      count++
      continue
    }
    if (sorted(strs[i]) in dict) {
      anagrams[dict[sorted(strs[i])]].push(strs[i])
    } else {
      anagrams.push([strs[i]])
      dict[sorted(strs[i])] = count
      count++
    }
  }
  return anagrams
}
