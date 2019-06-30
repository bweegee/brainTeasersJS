/*
 *In the olden days, playing marbles used to be every kid's favorite game.
 *George is a marble collector. He has a special habit of putting marbles of
 *the same color into one box and numbering each marble contained therein,
 *starting from 1 (i.e: there are 5 marbles in a box, and they are respectively
 *numbered from 1 to 5).
 *
 *One day, Richie came to visit George. The two played
 *marbles together and after a while, Richie suddenly came up with a new game: to
 *count the available alternatives to pick a marble from each box so that any two
 *chosen marbles have different numbers.  However, as the boys could not reach an
 *agreement on their results, they asked for your support in coding a program
 *which could deliver the correct result.
 *
 *Constraints: + n <= 10^5 + Number of
 *marbles in each box <= 10^5.  Input: + The first line contains an integer N as
 *the number of marble-containing boxes, followed by n numbers representing the
 *respective number of marbles contained in the boxes.  Output: + Print the
 *result. As it could be a large number, you can output it as modulo 10^9+7.
*/

var input = '';
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
  input += chunk;
});
process.stdin.on('end', function() {
  'use strict';
  const boxes = input.split('\n');
  const m = Number(1e9 + 7);
  let result = 1;

  boxes.shift();
  let n = boxes.length;
  // filter and reassign length
  for (let i = n - 1; i >= 0; i--) {
    if (boxes[i] === undefined || boxes[i] === '')
      boxes.splice(i, 1);
  }
  n = boxes.length;

  boxes.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    let num = Number(boxes[i]);

    if (num - i <= 0) {
      result = 0;
      break;
    }

    result = (result * (num - i)) % m;
  }

  console.log(result);
});
