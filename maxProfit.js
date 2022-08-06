/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buy = 0
  let sell = 1
  let max = 0

  while (sell < prices.length) {
    if (prices[buy] < prices[sell]) {
      max = Math.max(max, prices[sell] - prices[buy])
    } else {
      buy = sell
    }
    sell += 1
  }
  return max
}
