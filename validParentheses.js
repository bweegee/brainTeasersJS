/*
 ***** INCOMPLETE ****
*/

/*
 * Valid Parentheses
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * An input string is valid if:
   * Open brackets must be closed by the same type of brackets.
   * Open brackets must be closed in the correct order.
*/


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    s = [...s]

    let open = ['(', '{', '[']
    let close = [')', '}', ']']
    let valid = true
    
    while (s.length > 1) {
    
    if (!open.includes(s[0]))
        return s[0]
    else

        var match = close[open.indexOf(s.shift())]
        console.log(match === isValid(s))
        console.log(match)
        console.log('is valid ' + isValid(s))
        if (match === isValid(s)) {
            valid = true
            console.log(s)
            s.splice(0, 1)
            console.log(s)
            isValid(s)
        } else {
            valid = false
            return false
        }
    }
    console.log('Valid is ' + valid)
    return valid
};

