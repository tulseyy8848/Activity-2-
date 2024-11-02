function fizzBuzz() {
    const result = []; // Initialize an empty array
  
    for (let i = 1; i <= 50; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push("FizzBuzz"); // Divisible by both 3 and 5
      } else if (i % 3 === 0) {
        result.push("Fizz"); // Divisible by 3
      } else if (i % 5 === 0) {
        result.push("Buzz"); // Divisible by 5
      } else {
        result.push(i); // Otherwise, just the number
      }
    }
  
    return result; // Return the final array
  }
  
  // Test the function
  console.log(fizzBuzz());
  