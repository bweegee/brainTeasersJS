/*
Given an array of integers, calculate the fractions of its elements that are
positive, negative, and are zeros. Print the decimal value of each fraction on a new line.
*/

function plusMinus(arr) {
  var count = {
    pos: 0,
    neg: 0,
    zero: 0,
  };

  arr.forEach(n => {
    if (n > 0) count.pos += 1;
    else if (n < 0) count.neg += 1;
    else count.zero += 1;
  });

  // map through count values, divide by arr length, set to 6 decimals
  Object.values(count).map(n => {
    console.log((n / arr.length).toFixed(6));
  });
}
