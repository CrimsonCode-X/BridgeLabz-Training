// Q3: Multi-Step Form with validation
const form = document.getElementById("multiStepForm");
const steps = [...document.querySelectorAll(".form-step")];
const summary = document.getElementById("summary");
let currentStep = 0;

function showStep(index) {
  steps.forEach((step, stepIndex) => step.hidden = stepIndex !== index);
  currentStep = index;
}

function validateStep() {
  const input = steps[currentStep].querySelector("input");
  const error = steps[currentStep].querySelector(".step-error");
  let valid = input.checkValidity();
  if (input.name === "name") valid = /^[A-Za-z ]+$/.test(input.value.trim());
  if (input.name === "email") valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
  if (input.name === "password") valid = input.value.length >= 6;
  error.textContent = valid ? "" : input.name === "name" ? "Enter a name using letters and spaces."
    : input.name === "email" ? "Enter a valid email address." : "Password must be at least 6 characters.";
  return valid;
}

form.addEventListener("click", event => {
  if (event.target.matches("[data-next]")) {
    if (!validateStep()) return;
    if (currentStep < steps.length - 1) showStep(currentStep + 1);
    if (currentStep === steps.length - 1) {
      const data = Object.fromEntries(new FormData(form).entries());
      summary.hidden = false;
      summary.textContent = `Name: ${data.name}\nEmail: ${data.email}\nPassword: ${"*".repeat(data.password.length)}\nForm completed!`;
      form.querySelector("[data-next]").hidden = true;
    }
  }
  if (event.target.matches("[data-back]") && currentStep > 0) showStep(currentStep - 1);
});
