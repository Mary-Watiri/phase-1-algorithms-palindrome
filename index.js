
function isPalindrome(word) {
  // Write your algorithm here
  var reversed = word.split("").reverse().join("");

  if (reversed === word){
    return true;
  }else{
    return false;
  }

}
const word = "abb";
isPalindrome(word);
/* START
  Create a function isPalindrome
  The function should take in one parameter
  Declare a variable that reverses the original word passed in
  Use the if else statements to compare the reversed word with the original word
  Declare the variable passed in as a parameter in the function and assign it a value
  Call the function isPalindrome
  END
*/

/*
  My code takes in any word in lowercase as an input,my function isPalindrome reverses the word and compares whether it is equal to the original and returns true if the two are equal.
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
