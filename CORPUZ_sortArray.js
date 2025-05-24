// CORPUZ CHARLES ADRIAN G.
// BSCS 1-B

// Prompt user to input numbers as a comma-separated string
let numberInput = prompt("Enter numbers separated by commas (e.g., 24,65,21,5,9,32,42,80,57):");

// Prompt user to input names as a comma-separated string
let nameInput = prompt("Enter names separated by commas (e.g., Zenvo,Erica,Jordie,Alicia,Redon):");

// Convert the string of numbers into an array of integers
let numbers = numberInput.split(',').map(Number);

// Convert the string of names into an array of strings
let names = nameInput.split(',');

// Merge both arrays into a single array
let mergedArray = [...numbers, ...names];
console.log("Merged Array:", mergedArray);

// Sort the numbers in descending order (reverse numerical order)
let sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("Numbers Sorted in Reverse:", sortedNumbers);

// Sort the names alphabetically
let sortedNames = [...names].sort();
console.log("Names Sorted Alphabetically:", sortedNames);