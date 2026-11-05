// Q7: Login Form Validation using RegExp
const form = document.getElementById("loginForm");
const usernameRegex = /^.{5,}$/;
const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{8,}$/;

form.addEventListener("submit", event => {
  event.preventDefault();
  const username = form.elements.username.value;
  const password = form.elements.password.value;
  const errors = [];

  if (!usernameRegex.test(username)) errors.push("Username must be at least 5 characters.");
  if (password.length < 8) errors.push("Password must be at least 8 characters.");
  if (!/[0-9]/.test(password)) errors.push("Password must include a number.");
  if (!/[A-Z]/.test(password)) errors.push("Password must include an uppercase letter.");
  if (!/[a-z]/.test(password)) errors.push("Password must include a lowercase letter.");
  if (!/[^A-Za-z0-9]/.test(password)) errors.push("Password must include a special character.");

  document.getElementById("loginResult").textContent = errors.length
    ? errors.join("\n")
    : "Validation successful!";
});
