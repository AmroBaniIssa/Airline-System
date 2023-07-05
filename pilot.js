const events = require('./events');


events.on('new-flight-Scheduled',notifyScheduledFlight);

function notifyScheduledFlight(flightDetails) {
    this.flight = flightDetails;

setTimeout(() => {
    console.log(`Flight ${this.flight.flightId} is taking off.`);
    this.emit('took-off', this.flight);
  }, 4000);

setTimeout(() => {
    console.log(`Flight ${this.flight.flightId} has arrived.`);
    this.emit('Arrived', this.flight);
  }, 7000);

}