/*
 * Given a string, find the first non-repeating character in it and return it's
 * index. If it doesn't exist, return -1.
*/

/*
 * *** RESULTS ***
 * Runtime: 84 ms, faster than 89.27% of JavaScript online submissions
 * Memory Usage: 37.6 MB, less than 92.42% of JavaScript online submissions
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.lastIndexOf(s[i]) === i && s.indexOf(s[i]) === i) return i;
  }
  return -1;
};
