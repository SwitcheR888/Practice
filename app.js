'use strict';

const bookedSlots = 8;
const maxSlots = 8;
const appointmentStatus = 'confirmed';

const isFull = bookedSlots === maxSlots;
console.log('isFull', isFull);

const needsConfirmation = appointmentStatus !== 'confirmed';
console.log('needsConfirmation', needsConfirmation);
