// This function takes a string as input and returns a new string where the case of each character is swapped.
function swapCase(inputString) {

   // Initialize an empty string to store the swapped characters.
    let swappedString = "";

     // Loop through each character in the input string.
    for (let i = 0; i < inputString.length; i++) {

        // Get the current character.
        let char = inputString[i];

        // Check if the character is uppercase.
        if (char === char.toUpperCase()) {

         // If the character is uppercase, convert it to lowercase and add it to the swapped string.
            swappedString += char.toLowerCase();

        // If the character is not uppercase (i.e., it's lowercase), convert it to uppercase and add it to the swapped string.

        } else {
            swappedString += char.toUpperCase();
        }

        // Return the final swapped string.
    }
    return swappedString;
}


// The input string to be processed.
let inputString = 'The Quick Brown Fox jumps';

// Call the swapCase function with the input string.
let outputString = swapCase(inputString);

// Outpu the output string to be processed.
console.log(outputString); 



