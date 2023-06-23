import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import BookingSlot from '../components/BookingSlot';
import { submitAPI } from '../components/api';

const BookingPage = () => {
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    try {
      const isSubmitted = await submitAPI(formData);
      if (isSubmitted) {
        navigate('/confirmation'); // Navigate to the booking confirmation page
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <h1>Little Lemon Restaurant</h1>
      <BookingForm submitForm={submitForm} />
      <BookingSlot />
    </>
  );
};

export default BookingPage;
