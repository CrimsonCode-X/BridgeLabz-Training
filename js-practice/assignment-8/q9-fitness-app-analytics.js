// Q9. Fitness App Analytics
class FitnessAnalytics {
  constructor(workouts) {
    if (!Array.isArray(workouts) || workouts.length === 0) throw new Error("Workout dataset cannot be empty.");
    this.workouts = workouts;
  }
  getActiveUsers() { return this.workouts.filter(entry => entry.steps > 7000); }
  getAverageCalories() {
    return this.workouts.reduce((sum, entry) => sum + entry.calories, 0) / this.workouts.length;
  }
  getUserSummary() {
    return this.workouts.map(entry => `${entry.user} walked ${entry.steps} steps and burned ${entry.calories} calories.`);
  }
}
const workouts = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 }
];
try {
  const analytics = new FitnessAnalytics(workouts);
  console.log("Active users:", analytics.getActiveUsers());
  console.log("Average calories:", analytics.getAverageCalories());
  console.log("User summaries:", analytics.getUserSummary());
} catch (error) { console.error("Analytics error:", error.message); }