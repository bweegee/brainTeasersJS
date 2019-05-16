// Complete the vowelsAndConsonants function in the editor below. It has one 
// parameter, a string, “s”, consisting of lowercase English alphabetic letters 
// (i.e., a through z). The function must do the following:
// 1. First, print each vowel in “s” on a new line. The English vowels are 
// a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in.
// 2. Second, print each consonant (i.e., non-vowel) in “s” on a new line in the same order as it appeared in.

function vowelsAndConsonants(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    notVowel = []

    for (let l of s) {
        if (vowels.includes(l))
            console.log(l)
        else
            notVowel.push(l)
    }

    notVowel.forEach(l => console.log(l))
}
