"use strict";
const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];
for (const employee of employees) {
  try {
    if (!employee || !employee.name || employee.salary === undefined || employee.years === undefined) throw new Error("Missing required employee property");
    const salary = Number(employee.salary), years = Number(employee.years);
    if (!Number.isFinite(salary) || !Number.isFinite(years)) throw new TypeError("Salary/years must be numeric");
    const bonus = salary * (years > 3 ? 0.10 : 0.05);
    console.log(employee.name + ": salary ₹" + salary.toFixed(2) + ", experience " + years + " years, bonus ₹" + bonus.toFixed(2) + ", total ₹" + (salary + bonus).toFixed(2));
  } catch (error) { console.error("Employee record skipped:", error.name, error.message); }
}
// Strict mode prevents accidental implicit globals; every variable is explicitly declared.
