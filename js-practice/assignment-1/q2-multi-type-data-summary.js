// Q2: Multi-Type Data Summary
// Store examples of different data types and report their values and types.

const userName = "Aman";                         // string
const userAge = 20;                              // number
const isStudent = true;                          // boolean
const favoriteSubjects = ["JavaScript", "DSA"];  // array
const userProfile = { city: "Mathura" };         // object
const middleName = null;                         // null
let optionalValue;                               // undefined

// typeof null returns "object" in JavaScript (a historical language quirk).
const dataSummary = [
  { label: "userName", value: userName, type: typeof userName },
  { label: "userAge", value: userAge, type: typeof userAge },
  { label: "isStudent", value: isStudent, type: typeof isStudent },
  { label: "favoriteSubjects", value: favoriteSubjects.join(", "), type: Array.isArray(favoriteSubjects) ? "array" : typeof favoriteSubjects },
  { label: "userProfile", value: JSON.stringify(userProfile), type: typeof userProfile },
  { label: "middleName", value: middleName, type: middleName === null ? "null" : typeof middleName },
  { label: "optionalValue", value: optionalValue, type: typeof optionalValue }
];

console.table(dataSummary);
