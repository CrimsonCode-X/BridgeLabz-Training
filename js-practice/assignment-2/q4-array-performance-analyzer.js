// Q4: Array Performance Analyzer
// Generate eight random integer scores between 30 and 100, inclusive.

const scores = Array.from(
  { length: 8 },
  () => Math.floor(Math.random() * 71) + 30
);

const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);
const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;
const passedScores = scores.filter(score => score >= 50);
const scoreReport = scores.map((score, index) => ({
  student: index + 1,
  score,
  result: score >= 50 ? "Pass" : "Fail"
}));

console.table(scoreReport);
console.log(`Highest score: ${highestScore}`);
console.log(`Lowest score: ${lowestScore}`);
console.log(`Average score: ${averageScore.toFixed(2)}`);
console.log(`Students passed: ${passedScores.length} out of ${scores.length}`);
