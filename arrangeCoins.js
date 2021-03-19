/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = (n) => {
  let count = 1
  let coins = n
  let steps = 0
  if (n > 0) {
    for(let i = 0; i < n; i++) {
      if (count > coins) {
        break
      }
      coins -= count
      count++
      steps++
    }
  }
  return steps
};
