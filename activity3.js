function findMaxMin(numbers) {
    if (numbers.length === 0) return null; // Handle empty array case
  
    let max = numbers[0]; // Initialize max to the first element
    let min = numbers[0]; // Initialize min to the first element
  
    // Loop through the array to find max and min
    for (let num of numbers) {
      if (num > max) {
        max = num; // Update max if current number is greater
      }
      if (num < min) {
        min = num; // Update min if current number is lower
      }
    }
  
    return { max, min }; // Return an object with both values
  }
  
  // Test the function with a sample array
  console.log(findMaxMin([3, 5, 1, 8, 2, -4])); // Should print { max: 8, min: -4 }
  