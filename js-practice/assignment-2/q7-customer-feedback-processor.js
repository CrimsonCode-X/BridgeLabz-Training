// Q7: Customer Feedback Processor
// Count words and check whether feedback contains negative keywords.

const feedback = "Great product! Fast delivery and amazing sound quality!";
const words = feedback.trim().split(/\s+/);
const wordCount = words.length;
const normalizedFeedback = feedback.toLowerCase();

const containsNegativeFeedback =
  normalizedFeedback.includes("bad") ||
  normalizedFeedback.includes("poor");

console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${wordCount}`);

if (!containsNegativeFeedback) {
  console.log("Positive Feedback");
} else {
  console.log("Needs Improvement");
}
