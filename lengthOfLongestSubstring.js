// Given a string, find the length of the longest substring without repeating characters.

/*
 * time exceeded on test 987/987
 * string.length = 31000
 * more optimization needed
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let currString = []
  let longest = 0

  if (!s)
    return 0

  for (let i = 0; i <= s.length; i++) {
    for (let l of s.substring(i)) {
      if (currString.includes(l)) {
          if (currString.length > longest)
              longest = currString.length
          currString.length = 0
          currString.push(l)
      } else {
          currString.push(l)
      }
    }
    if (longest < currString.length)
      longest = currString.length
    currString.length = 0
  }

   return longest
}

// Original recursive solution
/*
  Time exceeded on test case "znwxtliqfklileyywbihmhtanyweb" 820ms
  output was correct
*/

/*
var lengthOfLongestSubstring = function(s) {
  let currString = []
  let longest = 0
    
  if (!s)
    return 0

  for (let i = 0; i <= s.length; i++) {
    for (let l of s.substring(i)) {
      if (currString.includes(l)) {
          if (currString.length > longest)
              longest = currString.length
          currString.length = 0
          currString.push(l)
      } else {
          currString.push(l)
      }
    }
  }
  
  if (longest < currString.length)
      longest = currString.length
    
  return longest > lengthOfLongestSubstring(s.substring(1)) ? longest
         : lengthOfLongestSubstring(s.substring(1))

};
*/
