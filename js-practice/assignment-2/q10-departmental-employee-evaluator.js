// Q10: Departmental Employee Evaluator
// Assign a performance label to each department based on its score.

const departments = [
  ["HR", 72],
  ["Finance", 88],
  ["Tech", 95],
  ["Support", 63]
];

const evaluationReport = [];

for (const department of departments) {
  const departmentName = department[0];
  const score = department[1];
  let performance;

  if (score >= 90) {
    performance = "Excellent";
  } else if (score >= 75) {
    performance = "Good";
  } else if (score >= 60) {
    performance = "Average";
  } else {
    performance = "Needs Improvement";
  }

  evaluationReport.push({
    department: departmentName,
    score,
    performance
  });
}

console.table(evaluationReport);
