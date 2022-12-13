function isPalindrome(word) {
  // Write your algorithm here

  if(word.length < 2) return true

  let start = 0
  let end = word.length - 1

  while(start <= end){
    if(word[start] != word[end]){
      return false
    }
    start++
    end--
  }
  return true
}

/* 
  Add your pseudocode here

  Loop through the string, 
  checking if the last element != element at beginning
  if the elements not same return false, or else return true
  Increment at the start and decrement at the end
*/

/*
  Add written explanation of your solution here

  Have created a function that enabling user to input a word. 
  Checked word value is less than 2 and returned true if word has a length of < 2.
  Looped the string to create an outcome if the word is >= 2. 
  Returned false when the last element doesn't match the first.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
