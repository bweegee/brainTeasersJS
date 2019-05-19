// Given a string, find the length of the longest substring without repeating characters.

/*
  Time exceeded on "znwxtliqfklileyywbihmhtanyweb" 820ms
  output was correct
  ***refactor needed
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

  for (let l of s) {
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
    
  return longest > lengthOfLongestSubstring(s.substring(1)) ? longest
         : lengthOfLongestSubstring(s.substring(1))

};
