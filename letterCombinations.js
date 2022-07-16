/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
  const hash = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  }
  const results = []
  const backtrack = (i, string) => {
    if (string.length === digits.length) {
      results.push(string)
      return
    }
    for (let char of hash[digits[i]]) {
      backtrack(i + 1, string + char)
    }
  }
  if (!digits) return []
  backtrack(0, "")
  return results
}
