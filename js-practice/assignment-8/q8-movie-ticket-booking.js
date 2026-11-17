// Q8. Movie Ticket Booking (Inheritance + Prototype Chain)
class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName; this.seatNo = seatNo; this.price = price;
  }
}
MovieTicket.prototype.printTicket = function() {
  console.log(`Movie: ${this.movieName} | Seat: ${this.seatNo} | Ticket price: ₹${this.price}`);
};
class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price); this.convenienceFee = convenienceFee;
  }
  getTotalAmount() { return this.price + this.convenienceFee; }
}
const tickets = [
  new OnlineTicket("Interstellar", "A10", 250, 30),
  new OnlineTicket("Inception", "B05", 220, 25)
];
tickets.forEach(ticket => {
  ticket.printTicket(); // inherited from MovieTicket.prototype
  console.log("Total amount: ₹" + ticket.getTotalAmount());
  console.log("Prototype chain works:", MovieTicket.prototype.isPrototypeOf(OnlineTicket.prototype));
});