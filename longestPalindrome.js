/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  let palindrome = ""
  if (s.length === 1) return s
  for (let i = 0; i < s.length; i++) {
    const odd = findPalindrome(s, i, i)
    const even = findPalindrome(s, i, i + 1)
    if (odd.length > palindrome.length) palindrome = odd
    if (even.length > palindrome.length) palindrome = even
  }
  return palindrome
}

const findPalindrome = (s, left, right) => {
  while (s[left] && s[right] && s[left] === s[right]) {
    left -= 1
    right += 1
  }
  return s.slice(left + 1, right)
}
