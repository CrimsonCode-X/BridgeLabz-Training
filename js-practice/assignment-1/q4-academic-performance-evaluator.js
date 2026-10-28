// Q4: Academic Performance Evaluator
// Change the marks in this array to test different results.

const subjectMarks = [88, 76, 91, 82, 79];
const passingMark = 35;
const totalMarks = subjectMarks.reduce((sum, mark) => sum + mark, 0);
const averageMarks = totalMarks / subjectMarks.length;
const percentage = (totalMarks / (subjectMarks.length * 100)) * 100;
const hasFailedSubject = subjectMarks.some(mark => mark < passingMark);

console.log(`Average marks: ${averageMarks.toFixed(2)}`);
console.log(`Overall percentage: ${percentage.toFixed(2)}%`);

if (hasFailedSubject || percentage < 50) {
  console.log("Detained");
} else if (percentage >= 85 && !hasFailedSubject) {
  console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
  console.log("Promoted");
} else {
  console.log("Detained");
}
