// Q4. Employee Inheritance + Runtime Polymorphism
class Employee {
  constructor(name, department) { this.name = name; this.department = department; }
  work() { return `${this.name} works in ${this.department}.`; }
}
class Manager extends Employee {
  work() { return `${this.name} manages the ${this.department} team and coordinates projects.`; }
}
const team = [new Employee("Riya", "Engineering"), new Employee("Arjun", "Sales"), new Manager("Meera", "Engineering")];
team.forEach(member => console.log(member.work()));
// Same method call, work(), produces behavior based on each object's actual class.