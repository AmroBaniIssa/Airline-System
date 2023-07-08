const events = require("./events");

events.on("new-flight-Scheduled", notifyScheduledFlight);

function notifyScheduledFlight(flightDetails) {
  const flight = flightDetails;

  setTimeout(() => {
    console.log(`Flight ${flight.Details.flightID} is taking off.`);
    events.emit("took-off",flight);
  }, 4000);

  setTimeout(() => {
    console.log(`Flight ${flight.Details.flightID} has arrived.`);
    events.emit("Arrived",flight);
  }, 7000);
}
