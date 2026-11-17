// Q5. Ride-Sharing Application
class User {
  constructor(name, rating) { this.name = name; this.rating = rating; }
}
class Driver extends User {
  constructor(name, rating, vehicle, registration) {
    super(name, rating); this.vehicle = vehicle; this.registration = registration;
  }
}
class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation; this.toLocation = toLocation; this.distance = distance;
  }
  calculateFare() {
    if (this.distance === undefined || this.distance === null || this.distance === "" || !Number.isFinite(Number(this.distance)) || Number(this.distance) < 0)
      throw new Error("A valid non-negative trip distance is required.");
    const baseFare = 40, ratePerKm = 12;
    return baseFare + Number(this.distance) * ratePerKm;
  }
}
const driver = new Driver("Vikram", 4.8, "Sedan", "UP85 AB 1234");
console.log(`Driver: ${driver.name} | ${driver.vehicle} | Rating: ${driver.rating}`);
[ new Trip("Mathura", "Vrindavan", 15), new Trip("Mathura", "Agra", -5), new Trip("A", "B", undefined) ].forEach(trip => {
  try { console.log(`${trip.fromLocation} → ${trip.toLocation}: ₹${trip.calculateFare()}`); }
  catch (error) { console.error(`Could not calculate fare: ${error.message}`); }
});