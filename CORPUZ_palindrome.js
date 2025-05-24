// CORPUZ CHARLES ADRIAN G.
// BSCS 1-B

// Ask the user to input the first and second words
let word1 = prompt("Enter the first word (e.g., RACECAR):");
let word2 = prompt("Enter the second word (e.g., RECORDER):");

// Function to check if a word is a palindrome
function checkPalindrome(word) {
    // Reverse the string
    let reversed = word.split('').reverse().join('');
    
    // Log original and reversed strings
    console.log(`Original: ${word}, Reversed: ${reversed}`);
    
    // Return true if the original word is the same as the reversed
    return word === reversed;
}

// Log the result of palindrome checks
console.log(`Is "${word1}" a palindrome?`, checkPalindrome(word1));
console.log(`Is "${word2}" a palindrome?`, checkPalindrome(word2));