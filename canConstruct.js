/*
 * Given an arbitrary ransom note string and another string containing letters
 * from all the magazines, write a function that will return true if the ransom
 * note can be constructed from the magazines ; otherwise, it will return false.
 * Each letter in the magazine string can only be used once in your ransom note.
*/

/*
 * *** RESULTS ***
 * 
 *
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// greedy
const canConstruct = (ransomNote, magazine) => {
  for (let i = 0; i < ransomNote.length; i++) {
    magazine = [...magazine]
    if (!magazine.includes(ransomNote[i])) return false;
    magazine.splice(magazine.indexOf(ransomNote[i]), 1);
  }
  return true;
};
