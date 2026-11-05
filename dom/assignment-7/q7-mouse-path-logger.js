// Q7: Detect Mouse Path and Coordinates Logger
const trackingBox = document.getElementById("trackingBox");
const coordinates = document.getElementById("coordinates");

trackingBox.addEventListener("mousemove", event => {
  coordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

trackingBox.addEventListener("dblclick", event => {
  const rect = trackingBox.getBoundingClientRect();
  const dot = document.createElement("span");
  dot.className = "click-dot";
  dot.style.left = `${event.clientX - rect.left}px`;
  dot.style.top = `${event.clientY - rect.top}px`;
  trackingBox.append(dot);
});
