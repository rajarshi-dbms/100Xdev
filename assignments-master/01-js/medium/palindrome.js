/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '');
  for (let j = 0; j < cleanStr.length / 2; j++) {
    if (cleanStr[j].toLowerCase() !== cleanStr[cleanStr.length - 1 - j].toLowerCase()) {

      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
