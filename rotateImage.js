/*
 * You are given an n x n 2D matrix representing an image.
 * Rotate the image by 90 degrees (clockwise).
 * https://leetcode.com/problems/rotate-image/
*/

/*
 * *** RESULTS ***
 * Runtime: 52 ms, faster than 91.97% of JavaScript online submissions
 * Memory Usage: 34 MB, less than 30.79% of JavaScript online submissions
*/


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const rotate = matrix => {
  const n = matrix.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < n - 2 * i - 1; j++) {
      let temp = matrix[i + j][n - 1 - i];
      matrix[i + j][n - 1 - i] = matrix[i][i + j];
      matrix[i][i + j] = temp;

      temp = matrix[n - 1 - i][n - 1 - i - j];
      matrix[n - 1 - i][n - 1 - i - j] = matrix[i][i + j];
      matrix[i][i + j] = temp;

      temp = matrix[n - 1 - i - j][i];
      matrix[n - 1 - i - j][i] = matrix[i][i + j];
      matrix[i][i + j] = temp;
    }
  }
};
