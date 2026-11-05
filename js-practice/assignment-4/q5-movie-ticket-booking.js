// Q5: Movie Ticket Booking (Objects + RegExp)
const form = document.getElementById("bookingForm");
const nameRegex = /^[A-Za-z ]+$/;
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const seatsRegex = /^(10|[1-9])$/;

form.addEventListener("submit", event => {
  event.preventDefault();
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const seats = Number(form.elements.seats.value);
  const errors = [];

  if (!nameRegex.test(name)) errors.push("Name must contain alphabets and spaces only.");
  if (!emailRegex.test(email)) errors.push("Enter a valid email.");
  if (!seatsRegex.test(String(seats))) errors.push("Seats must be between 1 and 10.");

  const output = document.getElementById("ticketOutput");
  if (errors.length) {
    output.textContent = errors.join("\n");
    return;
  }

  const booking = { name, email, seats };
  output.textContent = `Booking confirmed\nName: ${booking.name}\nEmail: ${booking.email}\nSeats: ${booking.seats}`;
});
