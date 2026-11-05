// Q6: Employee Management System (Classes + Object Methods)
class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary; // monthly salary
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    if (percent < 0) throw new RangeError("Bonus cannot be negative.");
    this.salary = Number((this.salary * (1 + percent / 100)).toFixed(2));
  }
}

const employees = [
  new Employee(1, "Asha", "Engineering", 65000),
  new Employee(2, "Ravi", "Sales", 52000),
  new Employee(3, "Meera", "Finance", 60000),
  new Employee(4, "Kabir", "HR", 48000),
  new Employee(5, "Ishaan", "Engineering", 72000)
];

employees[0].applyBonus(10);
employees.forEach(employee =>
  console.log(`${employee.name} (${employee.department}): ₹${employee.getAnnualSalary().toLocaleString("en-IN")} annually`)
);

const totalAnnualPayout = employees.reduce((total, employee) => total + employee.getAnnualSalary(), 0);
console.log("Total annual payout: ₹" + totalAnnualPayout.toLocaleString("en-IN"));
