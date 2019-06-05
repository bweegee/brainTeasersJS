/*
 * *** RESULTS ***
 * Runtime: 44 ms, faster than 99.85% of JavaScript online submissions.
 * Memory Usage: 33.8 MB, less than 71.37% of JavaScript online submissions
*/

/*
 * Given a non-empty array of digits representing a non-negative integer,
 * plus one to the integer.
 *
 * The digits are stored such that the most significant digit is at the head of
 * the list, and each element in the array contain a single digit.
 *
 * You may assume the integer does not contain any leading zero,
 * except the number 0 itself.
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9 && i === 0) {
      digits[i] = 0;
      digits.unshift(1);
    } else if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i] += 1;
      break;
    }
  }
  return digits;
};
