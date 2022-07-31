/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = (num) => {
  let roman = ""
  const hash = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }
  for (const r in hash) {
    while (num >= hash[r]) {
      num -= hash[r]
      roman += r
    }
    if (num === 0) break
  }
  return roman
}
