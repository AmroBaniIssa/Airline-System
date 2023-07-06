'use strict';
const events=require('./events');
require('./manager');
require('./pilot');

events.on('new-flight', (payload) => {
    // console.log(`New flight scheduled. Details:`, flightDetails);
    events.emit('new-flight-Scheduled',{flightDetails:payload})
  });

events.on('Arrived', (payload) => {
    // manager.flightArrived(pilotName);flight-arrival
    events.emit('flight-arrival',{pilotName:payload.pilotName})
  });

console.log("hi")