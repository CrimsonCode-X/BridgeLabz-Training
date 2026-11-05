// Q2: Student Form Validator (Forms + RegExp)
const form = document.getElementById("studentForm");
const fields = {
  name: { regex: /^[A-Za-z ]+$/, message: "Use alphabets and spaces only." },
  email: { regex: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, message: "Enter a valid email address." },
  phone: { regex: /^\d{10}$/, message: "Phone must contain exactly 10 digits." },
  password: { regex: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, message: "Include an uppercase letter, number, and special character." }
};

Object.entries(fields).forEach(([name, config]) => {
  const input = form.elements[name];
  input.addEventListener("input", () => validateField(name));
});

function validateField(name) {
  const input = form.elements[name];
  const error = document.getElementById(name + "Error");
  const valid = fields[name].regex.test(input.value.trim());
  input.classList.toggle("valid", valid);
  input.classList.toggle("invalid", !valid);
  error.textContent = valid || !input.value ? "" : fields[name].message;
  return valid;
}

form.addEventListener("submit", event => {
  event.preventDefault();
  const valid = Object.keys(fields).map(validateField).every(Boolean);
  document.getElementById("result").textContent = valid
    ? "Registration form is valid."
    : "Please correct the highlighted fields.";
});
