/**
 * Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
 *
 * RESULTS
 * Runtime: 148 ms, faster than 91.40% of JavaScript online submissions for Roman to Integer.
 * Memory Usage: 40.7 MB, less than 20.91% of JavaScript online submissions for Roman to Integer.
 *
*/

/** 
 * @param {string} s
 * @return {number}
*/
var romanToInt = function(s) {
    let amt = []
  
    for (let l of s) {
        
        switch (l) {
            case 'I':
                amt.push(1)
                break;
            case 'V':
                amt.push(5)
                break;
            case 'X':
                amt.push(10)
                break;
            case 'L':
                amt.push(50)
                break;
            case 'C':
                amt.push(100)
                break;
            case 'D':
                amt.push(500)
                break;
            default:
                amt.push(1000)
        }
    } 
    return amt.reduce((add, n, i) => {
        if (n < amt[i + 1]) {
           return add + (amt.splice((i + 1),1) - n)
        } else {
            return add + n
        }
    },0)
};
