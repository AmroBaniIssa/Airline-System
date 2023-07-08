const events = require("./events");
require("./system");
require("./pilot");
const uuid = require("uuid");
const { faker } = require("@faker-js/faker");

setInterval(() => {
  const Flight = {
    event: "new-flight",
    time: faker.date.future({ refDate: "2023-07-08T00:00:00.000Z" }),
    Details: {
      airLine: "Royal Jordanian Airlines",
      destination: faker.location.country(),
      pilot: faker.person.fullName(),
      flightID: uuid.v4(),
    },
  };

  console.log(
    `A new flight with ID ${Flight.Details.flightID} has been scheduled.`
  );
  events.emit("new-flight", Flight);
}, 10000);

events.on("flight-arrival", flightArrived);
function flightArrived(payload) {
  console.log(
    `Appreciation message to pilot ${payload.Details.pilot}: Thank you for safely landing the flight.`
  );
}
