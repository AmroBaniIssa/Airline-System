'use strict';
const events=require('./events');


events.on('new-flight', (flightDetails) => {
    console.log(`New flight scheduled. Details:`, flightDetails);
    events.emit('new-flight-Scheduled',flightDetails)
  });
events.on('took-off',(payload)=>{
    payload.event='took-off';
    console.log(payload);
})

events.on('Arrived', (payload) => {
    payload.event='Arrived';
    console.log(payload);
    events.emit('flight-arrival',payload)
  });
