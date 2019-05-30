// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward
/*
 * ***RESULT***
 * Runtime: 208 ms, faster than 88.24% of JavaScript online submissions for Palindrome Number.
 * Memory Usage: 45.7 MB, less than 55.31% of JavaScript online submissions
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  x = x.toString().split('');

  for (let n = 0; n < x.length / 2; n++) {
    if (x[n] !== x[x.length - 1 - n]) return false;
  }

  return true;
};

