const scores = [85, 93, 78, 92, 88, 76, 95, 89];

// Step 1: Filter out scores below 80
const passingScores = scores.filter(score => score >= 80);

// Step 2: Boost each passing score by 5 points
const boostedScores = passingScores.map(score => score + 5);

// Step 3: Calculate total class score using reduce
const totalClassScore = boostedScores.reduce((total, score) => total + score, 0);

// Test the results
console.log("Passing Scores:", passingScores); // Should print scores >= 80
console.log("Boosted Scores:", boostedScores); // Should print scores + 5
console.log("Total Class Score:", totalClassScore); // Total of boosted scores
