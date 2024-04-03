// function to check if te number is prime number
function isPrime(num) {
    // Check if the number is less than or equal to 1
    if (num <= 1) return false;
    // Check if the number is 2
    if (num === 2) return true;
    // check if the number is even
    if (num % 2 === 0) return false;
        // Iterate from 3 up to the square root of the number
    // Increment by 2 to check only odd numbers
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        // Check if the number is divisible by the current iteration
        if (num % i === 0) return false;
    }
     // If the loop completes without finding a divisor, the number is prime
    return true;
}
// Function to find prime numbers from an array
function findPrimes(arr) {
    // Initialize an array to store prime numbers
    const primeNumbers = [];
    // Iterate through each number in the array
    for (let num of arr) {
         // Check if the number is prime using the isPrime function
        if (isPrime(num)) {
            // If the number is prime, add it to the primeNumbers array
            primeNumbers.push(num);
        }
    }
    return primeNumbers;
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const result = findPrimes(inputArray);
console.log(result); 
