/*
 * Write a function:
 * function solution(A);
 * that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
*/

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let range = [...Array(100001).keys()];

  A.forEach(n => {
    if (range[n] != null) range[n] = null;
  });
  range[0] = null;

  return range.findIndex(smallest => smallest != null);
}
