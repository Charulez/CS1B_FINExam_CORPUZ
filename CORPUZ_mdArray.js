// CORPUZ CHARLES ADRIAN G.
// BSCS 1-B

// Create sub-arrays with prompt inputs

var namesInput = prompt("Enter 5 names separated by commas (e.g., Genevieve,Juan,Luna,Gabriel,Elise):");
var agesInput = prompt("Enter 5 ages separated by commas (e.g., 24,65,21,5,9):");

// Convert input strings into arrays
var subArray1 = namesInput.split(",");
var subArray2 = agesInput.split(",");

// Convert age strings to numbers
for (var i = 0; i < subArray2.length; i++) {
    subArray2[i] = parseInt(subArray2[i]);
}

// Restructure into a new multi-dimensional array [name, age]
var restructuredArray = [];
for (var i = 0; i < subArray1.length; i++) {
    restructuredArray.push([subArray1[i], subArray2[i]]);
}

// Log each [name, age] pair per line
console.log("Restructured multi-dimensional array:");
for (var i = 0; i < restructuredArray.length; i++) {
    console.log(restructuredArray[i]);
}
