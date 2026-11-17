// Q3. Product Discount System (Constructor + Prototype + Abstraction)
function Product(name, price) {
  this.name = name;
  this.price = price;
}
Product.prototype.applyDiscount = function(percent) {
  if (percent < 0 || percent > 100) throw new Error("Discount must be between 0 and 100.");
  return this.price * (1 - percent / 100);
};
const products = [
  new Product("Laptop", 60000), new Product("Headphones", 3000), new Product("Keyboard", 2000)
];
products.forEach((product, index) => {
  const discount = [10, 15, 5][index];
  console.log(`${product.name}: ₹${product.price} → ₹${product.applyDiscount(discount).toFixed(2)} (${discount}% off)`);
});
// Abstraction: callers use applyDiscount(percent) without repeating discount arithmetic.