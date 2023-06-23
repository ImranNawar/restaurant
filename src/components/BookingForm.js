import React, { useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from './api';
import './bookingForm.css';

const BookingForm = ({ submitForm }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    const today = new Date();
    fetchAvailableTimes(today);
  }, []);

  const fetchAvailableTimes = async (selectedDate) => {
    try {
      const times = await fetchAPI(selectedDate);
      setAvailableTimes(times);
    } catch (error) {
      console.error('Error fetching available times:', error);
    }
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    const selectedDate = new Date(e.target.value);
    fetchAvailableTimes(selectedDate);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(parseInt(e.target.value));
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      date,
      time,
      guests,
      occasion,
    };
    try {
      await submitForm(formData); // Call the submitForm function passed from props
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form
      style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
      onSubmit={handleSubmit}
      aria-label="Booking Form"
    >
      <h1>Booking Page</h1>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={handleTimeChange} aria-label="Select Time">
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={handleGuestsChange}
        aria-label="Number of Guests"
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={handleOccasionChange} aria-label="Select Occasion">
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" aria-label="Submit Reservation" />
    </form>
  );
};

export default BookingForm;
