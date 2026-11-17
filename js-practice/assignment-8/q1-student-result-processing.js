// Q1. Student Result Processing (reduce + Classes)
class Student {
  constructor(name, marks) { this.name = name; this.marks = marks; }
  calculateAverage() {
    if (!this.marks.length) throw new Error("Marks cannot be empty.");
    return this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
  }
  getGrade() {
    const average = this.calculateAverage();
    if (average >= 80) return "A";
    if (average >= 60) return "B";
    if (average >= 40) return "C";
    return "F";
  }
}
const students = [
  new Student("Aarav", [85, 90, 78]),
  new Student("Diya", [65, 72, 60]),
  new Student("Kabir", [32, 45, 38])
];
students.forEach(s => console.log(`${s.name}: Average = ${s.calculateAverage().toFixed(2)}, Grade = ${s.getGrade()}`));