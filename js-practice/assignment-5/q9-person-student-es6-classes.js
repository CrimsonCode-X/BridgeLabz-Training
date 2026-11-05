"use strict";
class Person {
  constructor(name) { this.name = name; }
  showName() { console.log("Name:", this.name); }
}
class Student extends Person {
  constructor(name, branch) {
    super(name); // Initialize the parent before using this.
    this.branch = branch;
  }
  showBranch() { console.log("Branch:", this.branch); }
}
const classStudent = new Student("Aman", "AI & Data Science");
classStudent.showName();
classStudent.showBranch();

// Equivalent constructor/prototype version for comparison.
function ProtoPerson(name) { this.name = name; }
ProtoPerson.prototype.showName = function () { console.log("Name:", this.name); };
function ProtoStudent(name, branch) { ProtoPerson.call(this, name); this.branch = branch; }
ProtoStudent.prototype = Object.create(ProtoPerson.prototype);
ProtoStudent.prototype.constructor = ProtoStudent;
ProtoStudent.prototype.showBranch = function () { console.log("Branch:", this.branch); };
const prototypeStudent = new ProtoStudent("Aman", "AI & Data Science");
prototypeStudent.showName();
prototypeStudent.showBranch();
console.log("Equivalent data:", classStudent.name === prototypeStudent.name && classStudent.branch === prototypeStudent.branch);
