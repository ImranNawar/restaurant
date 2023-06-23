import React, { useReducer } from 'react';

const BookingSlot = () => {
  const [bookingSlots] = useReducer(bookingSlotsReducer, initializeBookingSlots());

  function initializeBookingSlots() {
    return [
      { id: 1, time: '17:00', booked: false },
      { id: 2, time: '18:00', booked: true },
      { id: 3, time: '19:00', booked: false },
      { id: 4, time: '20:00', booked: false },
      { id: 5, time: '21:00', booked: false },
      { id: 6, time: '22:00', booked: true },
    ];
  }

  function bookingSlotsReducer(state) {
    return state;
  }

  return (
    <div>
      <BookingSlots bookingSlots={bookingSlots} />
    </div>
  );
};

const BookingSlots = ({ bookingSlots }) => {
  return (
    <div>
      <h2>Booking Slots</h2>
      <ul>
        {bookingSlots.map((slot) => (
          <li key={slot.id}>
            {slot.time} - {slot.booked ? 'Booked' : 'Available'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingSlot;
