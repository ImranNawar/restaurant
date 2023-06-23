import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  it('should display validation error messages', () => {
    const { getByLabelText, getByText } = render(<BookingForm />);
    
    // Simulate submitting the form without entering required fields
    fireEvent.click(getByText('Make Your reservation'));
    
    expect(getByText('Please choose a date')).toBeInTheDocument();
    expect(getByText('Please choose a time')).toBeInTheDocument();
    expect(getByText('Number of guests must be at least 1')).toBeInTheDocument();
  });

  it('should call submitForm with form data on successful submission', () => {
    const mockSubmitForm = jest.fn();
    const { getByLabelText, getByText } = render(<BookingForm submitForm={mockSubmitForm} />);
    
    // Enter valid form data
    fireEvent.change(getByLabelText('Choose date'), { target: { value: '2023-06-30' } });
    fireEvent.change(getByLabelText('Choose time'), { target: { value: '12:00 PM' } });
    fireEvent.change(getByLabelText('Number of guests'), { target: { value: '4' } });
    fireEvent.change(getByLabelText('Occasion'), { target: { value: 'Anniversary' } });
    
    // Submit the form
    fireEvent.click(getByText('Make Your reservation'));
    
    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: '2023-06-30',
      time: '12:00 PM',
      guests: 4,
      occasion: 'Anniversary',
    });
  });
});
