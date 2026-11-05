// Q1: E-Commerce Product Manager (Classes + Objects)
class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    if (percent < 0 || percent > 100) throw new RangeError("Discount must be 0–100%.");
    this.price = Number((this.price * (1 - percent / 100)).toFixed(2));
  }

  displayDetails() {
    return `[${this.id}] ${this.name} | ${this.category} | ₹${this.price.toFixed(2)}`;
  }
}

const products = [
  new Product(101, "Keyboard", 1499, "Accessories"),
  new Product(102, "USB Cable", 299, "Accessories"),
  new Product(103, "Monitor", 8999, "Electronics"),
  new Product(104, "Notebook", 120, "Stationery")
];

products[0].applyDiscount(10);
console.log("All products:");
products.forEach(product => console.log(product.displayDetails()));

console.log("\nProducts priced above ₹1000:");
products.filter(product => product.price > 1000)
  .forEach(product => console.log(product.displayDetails()));
