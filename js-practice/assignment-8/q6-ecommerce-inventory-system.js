// Q6. E-Commerce Inventory System (filter, sort, reduce)
const inventory = [
  { id: 1, name: "Laptop", category: "Electronics", price: 55000, stock: 4 },
  { id: 2, name: "Phone", category: "Electronics", price: 25000, stock: 12 },
  { id: 3, name: "Desk", category: "Furniture", price: 8000, stock: 3 },
  { id: 4, name: "Chair", category: "Furniture", price: 4500, stock: 18 },
  { id: 5, name: "Notebook", category: "Stationery", price: 80, stock: 2 },
  { id: 6, name: "Pen Set", category: "Stationery", price: 150, stock: 30 }
];
const getLowStockProducts = (products, threshold = 5) => products.filter(p => p.stock < threshold);
const sortProductsByPrice = products => [...products].sort((a, b) => a.price - b.price);
const calculateTotalInventoryValue = products => products.reduce((total, p) => total + p.price * p.stock, 0);
const groupByCategory = products => products.reduce((groups, p) => {
  (groups[p.category] ??= []).push(p); return groups;
}, {});
console.log("Low stock:", getLowStockProducts(inventory));
console.log("Sorted by price:", sortProductsByPrice(inventory));
console.log("Total inventory value: ₹" + calculateTotalInventoryValue(inventory));
console.log("Grouped by category:", groupByCategory(inventory));