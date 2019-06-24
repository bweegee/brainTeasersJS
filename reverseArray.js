// Write a function that reverses an array.
// Do not allocate extra space for another array,
// you must do this by modifying the input array in-place with O(1) extra memory.
// You may assume all the characters consist of printable ascii characters.
//
// Recursive Solution

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseArray(arr) {
  if (arr.length <= 1)
    return arr
  let element = arr.shift();
  reverseArray(arr)
  arr.push(element)
  return arr
};

/*
 * More efficient approach
*/

const reverseArray = arr => {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
};
