// Q8: Dynamic Object Updater
const user = { name: "John", email: "john@mail.com", age: 21 };
const form = document.getElementById("userForm");

function renderUser() {
  document.getElementById("userDetails").textContent = JSON.stringify(user, null, 2);
}

form.elements.name.value = user.name;
form.elements.email.value = user.email;
form.elements.age.value = user.age;
renderUser();

form.addEventListener("submit", event => {
  event.preventDefault();
  user.name = form.elements.name.value.trim();
  user.email = form.elements.email.value.trim();
  user.age = Number(form.elements.age.value);
  renderUser();
});
