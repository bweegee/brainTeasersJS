// Given an array of integers, return indices of the two numbers
// such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

var twoSum = function(nums, target) {
    let result = []
    for (let i = 0; i <= (nums.length - 1); i++) {
      var index = i
        for (let n = 1; n <= (nums.length - 1); n++) {
            if ((nums[index] + nums[index + n]) === target) {
              result.push(index,index + n)
                return result
            }
        }
    }
};
