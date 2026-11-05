// Q6: Real-Time Table Filter
const searchInput = document.getElementById("studentSearch");
const tableRows = [...document.querySelectorAll("#studentTable tbody tr")];
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;
  tableRows.forEach(row => {
    const matches = row.textContent.toLowerCase().includes(query);
    row.hidden = !matches;
    if (matches) visibleCount++;
  });
  noResults.hidden = visibleCount !== 0;
});
