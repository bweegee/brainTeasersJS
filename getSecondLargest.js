/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/

function getSecondLargest(nums) {
  // sort nums by descending order and set it to 0 index
  let high = nums.sort((a, b) => b - a)[0];
  let number;

  for (let n of nums) {
    if (n < high) {
      number = n;
      break;
    }
  }

  return number;
}
