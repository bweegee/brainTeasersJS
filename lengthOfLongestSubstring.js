// Given a string, find the length of the longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var subS = []
  var streak = [0]
  var number
  
  if (!s)
    return 0

  for (l of s) {
    if (subS.includes(l)) {
      subS.length = 0
      subS.push(l)
    } else {
      subS.push(l)
      streak.push(subS.length)
    }
  }

  number = streak.sort((a, b)=> a - b).pop()
  
  return number > lengthOfLongestSubstring(s.substring(1)) ? number
         : lengthOfLongestSubstring(s.substring(1))

};
