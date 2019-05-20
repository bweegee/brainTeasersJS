/*
 * Write a program that prints a staircase of size n
 *
 * The staircase is right-aligned, composed of # symbols and spaces,
 * and has a height and width of n
*/

function staircase(n) {
    var steps = ''
    for (let i = 1; i <= n; i++) {
        for (let j = (n - i); j > 0; j--) {
            steps += ' '
        }
        steps += '#'.repeat(i) + '\n'
    }

    console.log(steps)
}
