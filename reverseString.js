// Write a function that reverses a string.
// The input string is given as an array of characters char[].
// Do not allocate extra space for another string,
// you must do this by modifying the string in-place with O(1) extra memory.
// You may assume all the characters consist of printable ascii characters.
//
// Recursive Solution

function reverseString (string) {
  if (!string)
    return ""
  return reverseString(string.substring(1)) + string.charAt(0)
};

// ES6 Solution

function reverseString (string) {
  reverse = []

  for (let l of string) {
    reverse = [l, ...reverse]
  }
  return reverse.join('')
}
