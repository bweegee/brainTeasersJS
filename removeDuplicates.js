/*
 * Given a sorted array nums, remove the duplicates in-place such that each 
 * element appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this by modifying
 * the input array in-place with O(1) extra memory.
 *
 * *** RESULTS ***
 * Runtime: 72 ms, faster than 92.75% of JavaScript online submissions for Remove Duplicates from Sorted Array.
 * Memory Usage: 37.3 MB, less than 38.21% of JavaScript online submissions for Remove Duplicates from Sorted Array.
*/

var removeDuplicates = function(nums) {
  let val;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) nums.splice(i, 1);
    val = nums[i];
  }

  return nums.length;
};
