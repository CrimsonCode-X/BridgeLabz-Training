// Q9: Shopping Cart Total (Classes + RegExp for Coupon)
class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity) {
    if (!name || price < 0 || quantity < 1) throw new Error("Invalid item details.");
    this.items.push({ name, price: Number(price), quantity: Number(quantity) });
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  applyCoupon(code) {
    const match = /^(SAVE|DISC)(\d{1,2})$/.exec(code.trim().toUpperCase());
    if (!match) return { valid: false, message: "Coupon must look like SAVE20 or DISC10." };
    const percent = Number(match[2]);
    if (percent < 1 || percent > 100) return { valid: false, message: "Coupon discount must be 1–100%." };
    const total = this.getTotal();
    return { valid: true, percent, discount: total * percent / 100, finalTotal: total * (1 - percent / 100) };
  }
}

const cart = new Cart();
cart.addItem("Headphones", 2499, 1);
cart.addItem("Mouse", 799, 2);

const form = document.getElementById("couponForm");
form.addEventListener("submit", event => {
  event.preventDefault();
  const result = cart.applyCoupon(form.elements.coupon.value);
  const output = document.getElementById("cartOutput");
  if (!result.valid) {
    output.textContent = result.message;
    return;
  }
  output.textContent = `Subtotal: ₹${cart.getTotal().toFixed(2)}\nDiscount (${result.percent}%): ₹${result.discount.toFixed(2)}\nFinal total: ₹${result.finalTotal.toFixed(2)}`;
});
console.log("Cart items:", cart.items);
console.log("Subtotal:", cart.getTotal());
