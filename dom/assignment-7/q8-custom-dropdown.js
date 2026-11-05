// Q8: Custom Dropdown with capturing-phase outside click
const dropdown = document.getElementById("customDropdown");
const dropdownButton = document.getElementById("dropdownButton");
const optionsPanel = document.getElementById("dropdownOptions");

dropdownButton.addEventListener("click", event => {
  event.stopPropagation();
  const isOpen = optionsPanel.hidden;
  optionsPanel.hidden = !isOpen;
  dropdownButton.setAttribute("aria-expanded", String(isOpen));
});

optionsPanel.addEventListener("click", event => {
  const option = event.target.closest("[data-option]");
  if (!option) return;
  dropdownButton.textContent = option.dataset.option;
  optionsPanel.hidden = true;
  dropdownButton.setAttribute("aria-expanded", "false");
});

document.addEventListener("click", event => {
  if (!dropdown.contains(event.target)) {
    optionsPanel.hidden = true;
    dropdownButton.setAttribute("aria-expanded", "false");
  }
}, true); // Capture phase closes the menu before bubbling handlers.
