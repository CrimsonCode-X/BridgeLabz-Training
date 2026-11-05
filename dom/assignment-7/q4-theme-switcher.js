// Q4: Theme Switcher using setAttribute()
const themeButtons = document.querySelectorAll("[data-theme-choice]");
const body = document.body;

themeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const theme = button.dataset.themeChoice;
    body.setAttribute("class", `theme-${theme}`);
    body.setAttribute("data-theme", theme);
  });
});
