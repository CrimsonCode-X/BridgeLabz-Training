// Q5: Image Gallery with Modal Preview
const gallery = document.getElementById("gallery");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");

gallery.addEventListener("click", event => {
  const image = event.target.closest("img");
  if (!image) return;
  modalImage.src = image.src;
  modalImage.alt = image.alt;
  modal.hidden = false;
});

modal.addEventListener("click", () => {
  modal.hidden = true;
  modalImage.src = "";
});
modalImage.addEventListener("click", event => event.stopPropagation());
