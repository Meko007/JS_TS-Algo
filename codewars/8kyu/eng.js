/*
Given a string of arbitrary length with any ascii characters. 
Write a function to determine whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.
*/
const spEng = sentence => /english/i.test(sentence);

// Test cases
// console.log(spEng('english'));
// console.log(spEng('egnlish'));
// console.log(spEng('abcnEglishsef'));
// console.log(spEng('abcEnglishdef'));
// console.log(spEng('eNglisH'));