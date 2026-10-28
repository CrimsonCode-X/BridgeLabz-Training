// Q8: Dynamic Discount Evaluator
// Apply category discounts first, then an extra 5% if the original cart total exceeds ₹50,000.

const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

const originalTotal = cart.reduce((total, product) => total + product.price, 0);
let categoryDiscountTotal = 0;

const discountedItems = cart.map(product => {
  let discountRate = 0;

  if (product.category === "electronics") {
    discountRate = 0.10;
  } else if (product.category === "fashion") {
    discountRate = 0.05;
  }

  const discount = product.price * discountRate;
  categoryDiscountTotal += discount;

  return {
    item: product.item,
    category: product.category,
    originalPrice: product.price,
    discount: Number(discount.toFixed(2)),
    finalPrice: Number((product.price - discount).toFixed(2))
  };
});

let finalTotal = originalTotal - categoryDiscountTotal;
let extraDiscount = 0;

if (originalTotal > 50000) {
  extraDiscount = finalTotal * 0.05;
  finalTotal -= extraDiscount;
}

console.table(discountedItems);
console.log(`Original cart total: ₹${originalTotal.toFixed(2)}`);
console.log(`Category discounts: ₹${categoryDiscountTotal.toFixed(2)}`);
console.log(`Extra cart discount: ₹${extraDiscount.toFixed(2)}`);
console.log(`Final cart total: ₹${finalTotal.toFixed(2)}`);
