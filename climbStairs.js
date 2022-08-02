/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n, steps = 0) => {
  let one = 1
  let two = 1
  for (let i = 0; i < n - 1; i++) {
    const temp = one
    one += two
    two = temp
  }
  return one
}
