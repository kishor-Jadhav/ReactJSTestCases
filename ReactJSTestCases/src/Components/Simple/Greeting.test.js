// src/__tests__/Greeting.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // For extra matchers
import Greeting from './Greeting'; // Adjust path as necessary

test('Greeting displays initial name and updates it', () => {
  // Render the Greeting component with an initial name
  const { getByText, getByPlaceholderText } = render(<Greeting initialName="John" />);
  
  // Verify that the initial greeting is displayed
  expect(getByText('Hello, John!')).toBeInTheDocument();
  
  // Find the input field and change the name
  const input = getByPlaceholderText('Enter a new name');
  fireEvent.change(input, { target: { value: 'Jane' } });
  
  // Verify that the greeting updates with the new name
  expect(getByText('Hello, Jane!')).toBeInTheDocument();
});
