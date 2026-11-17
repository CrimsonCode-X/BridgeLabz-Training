// Q2. Online Food Ordering (map + Error Handling)
const menu = [
  { name: "Burger", price: 120 }, { name: "Pizza", price: 250 },
  { name: "Pasta", price: 180 }, { name: "Fries", price: 90 }
];
function calculateBill(orderItems) {
  const prices = orderItems.map(itemName => {
    const item = menu.find(menuItem => menuItem.name.toLowerCase() === String(itemName).toLowerCase());
    if (!item) throw new Error(`"${itemName}" is not available on the menu.`);
    return item.price;
  });
  return prices.reduce((total, price) => total + price, 0);
}
[["Burger", "Pizza", "Fries"], ["Burger", "Sushi"]].forEach(order => {
  try { console.log(`Order: ${order.join(", ")} | Total: ₹${calculateBill(order)}`); }
  catch (error) { console.error(`Unable to place order: ${error.message}`); }
});