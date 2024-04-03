// Define a function named range that takes two parameters: start and end.
function range(start, end) {
  // Create an array of length equal to the difference between end and start plus one, filled with undefined values.
    // Then, map over each element of the array and assign values starting from 'start' incremented by the index.
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }
  // Call the range function with start value 4 and end value 7.
  let result = range(4, 7); 
  // Output the result to the console.
  console.log(result);

// Define a function named number that takes two parameters: start and end.
  function number(start, end){
     // Create an array of length equal to the difference between end and start plus one, filled with undefined values.
    // Then, map over each element of the array and assign values starting from 'start' incremented by the index.
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }
  //Call the number function with start value -4 and end value 7.
  let result2 = number(-4, 7);
  // Output the result to the console.
  console.log(result2); 