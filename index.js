function isPalindrome(word) {
  // Write your algorithm here
  if (word.length === 1){
    return true;
  }else{
    let backwardLtr = word.length-1;
    for (let i = 0; i<Math.ceil(word.length/2); i++){
      if(word[i] === word[backwardLtr]){
        backwardLtr--;
      }else{
        return false;
      }
    }
    return true;
  }
}
// console.log(isPalindrome("aa"))

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
