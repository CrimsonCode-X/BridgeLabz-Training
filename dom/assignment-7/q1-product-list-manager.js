// Q1: Dynamic Product List Manager using event delegation
const productForm = document.getElementById("productForm");
const productInput = document.getElementById("productInput");
const productList = document.getElementById("productList");
let nextProductId = 1;
let editingItem = null;

function saveEdit() {
  if (!editingItem) return;
  const input = editingItem.querySelector(".edit-input");
  const label = editingItem.querySelector(".product-name");
  if (input.value.trim()) label.textContent = input.value.trim();
  input.remove();
  label.hidden = false;
  editingItem = null;
}

productForm.addEventListener("submit", event => {
  event.preventDefault();
  const name = productInput.value.trim();
  if (!name) return;
  const item = document.createElement("li");
  item.dataset.productId = String(nextProductId++);
  item.innerHTML = '<span class="product-name"></span> <button type="button" data-action="edit">Edit</button> <button type="button" data-action="delete">Delete</button>';
  item.querySelector(".product-name").textContent = name;
  productList.append(item);
  productInput.value = "";
});

productList.addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const item = button.closest("li");
  if (button.dataset.action === "delete") {
    if (editingItem === item) editingItem = null;
    item.remove();
  } else {
    if (editingItem && editingItem !== item) saveEdit();
    if (editingItem === item) return;
    const label = item.querySelector(".product-name");
    const input = document.createElement("input");
    input.className = "edit-input";
    input.value = label.textContent;
    label.hidden = true;
    item.insertBefore(input, label);
    input.focus();
    editingItem = item;
  }
});

document.addEventListener("click", event => {
  if (editingItem && !editingItem.contains(event.target)) saveEdit();
});
