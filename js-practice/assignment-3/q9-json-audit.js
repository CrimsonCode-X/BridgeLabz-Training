"use strict";
const rawData = ['{"user":"Alex","age":25}', '{"id":2}', '{invalid}', '{"user":"Mina","age":"22"}'];
const cleanData = [], errors = [];
for (let i = 0; i < rawData.length; i++) {
  const line = i + 1;
  try {
    const parsed = JSON.parse(rawData[i]), missing = [];
    if (parsed.user === undefined) missing.push("user");
    if (parsed.age === undefined) missing.push("age");
    if (missing.length) throw new Error("Missing required key(s): " + missing.join(", "));
    const age = Number(parsed.age);
    if (!Number.isFinite(age)) throw new TypeError("Age must be numeric");
    cleanData.push({ ...parsed, age });
    console.log("Line " + line + ": valid record.");
  } catch (error) { errors.push({ line, type: error.name, message: error.message }); console.error("Line " + line + ": " + error.name + " — " + error.message); }
}
console.log("Clean data:", cleanData);
console.log("Under-18 users:", cleanData.filter(user => user.age < 18));
console.log("Audit errors:", errors);
// Debug: breakpoint at JSON.parse and inside catch; watch line, parsed, missing, error.
