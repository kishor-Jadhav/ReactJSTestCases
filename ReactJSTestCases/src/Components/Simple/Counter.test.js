// src/Components/Simple/Counter.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter'; // adjust path as needed

test('Counter increments when the button is clicked', () => {
  const { getByText } = render(<Counter />);
  
  // Verify initial count is 0
  expect(getByText('Count: 0')).toBeInTheDocument();
  
  // Click the increment button
  const button = getByText('Increment');
  fireEvent.click(button);
  
  // Verify the count is incremented to 1
  expect(getByText('Count: 1')).toBeInTheDocument();
});
