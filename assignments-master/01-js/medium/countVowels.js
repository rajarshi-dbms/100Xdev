/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  var count = 0;
  for (let j = 0; j < str.length; j++) {
    if (str[j].toLowerCase() == 'a' || str[j].toLowerCase() == 'e' || str[j].toLowerCase() == 'i' || str[j].toLowerCase() == 'o' || str[j].toLowerCase() == 'u') {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;