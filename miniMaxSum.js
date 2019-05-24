/*
 *
 *
*/

function miniMaxSum(arr) {
  arr = arr.sort((a,b) => a - b)

  max = arr.filter(n => n !== arr[0])
    .reduce((add, n) => {
      add += n
      return add
    },0)

  min = arr.filter(n => n !== arr[arr.length - 1])
    .reduce((add, n) => {
      add += n
      return add
    },0)
}
