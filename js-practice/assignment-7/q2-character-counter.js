// Q2: Live Character Counter with warning behavior
const textArea = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");
const maxCharacters = 100;

function updateCounter() {
  const remaining = maxCharacters - textArea.value.length;
  counter.textContent = `${remaining} characters remaining`;
  counter.classList.toggle("warning", remaining <= 20 && remaining > 0);
  counter.classList.toggle("limit", remaining === 0);
}

textArea.addEventListener("beforeinput", event => {
  if (event.inputType === "insertText" && textArea.value.length >= maxCharacters) {
    event.preventDefault();
  }
});
textArea.addEventListener("input", updateCounter);
resetButton.addEventListener("click", () => {
  textArea.value = "";
  updateCounter();
});
updateCounter();
