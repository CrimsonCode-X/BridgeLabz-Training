// Q5: Boolean Logic Access System
// Access is secure only when the alarm is on, door and window are closed,
// and the owner is inside. The ! operator is used to identify unsafe states.

const isDoorLocked = true;
const isWindowClosed = true;
const isAlarmOn = true;
const isOwnerInside = true;

const isSecure =
  isAlarmOn &&
  isDoorLocked &&
  isWindowClosed &&
  isOwnerInside;

const hasOpenEntry = !isDoorLocked || !isWindowClosed;

if (isSecure && !hasOpenEntry) {
  console.log("Secure");
} else {
  console.log("Unsafe");
}

// Change the boolean values above and rerun to test other outcomes.
