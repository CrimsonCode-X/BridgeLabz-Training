// Q2: String Manipulation Report
// Clean up whitespace, title-case the words, and replace "pro" with "Pro Edition".

const productName = " wireless headphones PRO ";
const trimmedName = productName.trim();
const lowercaseName = trimmedName.toLowerCase();

// Capitalize the first letter of each word using split(), map(), and join().
const titleCasedName = lowercaseName
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

// Replace the word "Pro" with the requested phrase.
const cleanedTitle = titleCasedName.replace(/\bPro\b/g, "Pro Edition");

console.log(`Cleaned title: ${cleanedTitle}`);
console.log(`Title length: ${cleanedTitle.length}`);
