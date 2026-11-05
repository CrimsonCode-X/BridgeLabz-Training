// Q9: Form Submit Blocker with live errors
const validationForm = document.getElementById("validationForm");
const successMessage = document.getElementById("successMessage");
const rules = {
  name: value => value.trim().length > 0,
  email: value => value.trim().includes("@"),
  password: value => value.length >= 6
};
const messages = {
  name: "Name is required.",
  email: "Email is required and must contain @.",
  password: "Password must be at least 6 characters."
};

function validateField(fieldName) {
  const input = validationForm.elements[fieldName];
  const error = document.getElementById(fieldName + "Error");
  const valid = rules[fieldName](input.value);
  error.textContent = valid ? "" : messages[fieldName];
  input.classList.toggle("invalid", !valid);
  return valid;
}

Object.keys(rules).forEach(fieldName => {
  validationForm.elements[fieldName].addEventListener("input", () => {
    validateField(fieldName);
    successMessage.textContent = "";
  });
});

validationForm.addEventListener("submit", event => {
  event.preventDefault();
  const valid = Object.keys(rules).map(validateField).every(Boolean);
  successMessage.textContent = valid ? "Form Submitted Successfully" : "";
});
