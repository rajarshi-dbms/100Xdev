/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let myarr = [];
  // var count = 0;
  for (let i = 0; i < str2.length; i++) {
    myarr[i] = true;
  }

  for (let i = 0; i < str1.length; i++) {
    // var key = str1[i];
    var count = 0;
    for (let j = 0; j < str2.length; j++) {

      if ((str1[i].toLowerCase() === str2[j].toLowerCase()) && (myarr[j])) {
        myarr[j] = false;

        break;
      }
      count++;
    }
    if (count == str2.length) {
      return false;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (myarr[i] == true) {
      return false;
    }
  }
  return true;
}


module.exports = isAnagram;
