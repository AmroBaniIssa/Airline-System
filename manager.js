const events = require('./events');
const uuid = require('uuid');
const faker = require('@faker-js/faker');
const name = faker.name;


    setInterval(() => {
      const flightId = uuid.v4();
      const pilotName = name.firstName();
      const destination = faker.address.country();

      console.log(`A new flight with ID ${flightId} has been scheduled.`);

      const flightDetails = {
        flightId,
        pilotName,
        destination
      };

      this.emit('new-flight', flightDetails);
    }, 10000);


  events.on('flight-arrival',flightArrived)
  function flightArrived(pilotName) {
    console.log(`Appreciation message to pilot ${pilotName}: Thank you for safely landing the flight.`);
  }

