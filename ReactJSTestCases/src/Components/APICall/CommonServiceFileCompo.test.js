// src/Components/__tests__/CommonServiceFileCompo.test.js
import React from 'react';
import { render, screen, waitFor,fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CommonServiceFileCompo from './CommonServiceFileCompo'; // Adjust the import path
import { fetchUserDetailService } from './fetchUserDetailService';
import { addTwoNos, sortCharArray, sortIntegerArray } from './commonServiceFile';
import { of, throwError } from 'rxjs';

// Mock the external service functions
jest.mock('./fetchUserDetailService');
jest.mock('./commonServiceFile');

describe('CommonServiceFileCompo Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch and display user details', async () => {
    const mockUser = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    };

    // Mock the fetchUserDetailService to return an observable with the user data
    fetchUserDetailService.mockReturnValue(of({ data: mockUser }));

    // Mock sort and addition functions
    sortIntegerArray.mockReturnValue([2, 3, 5, 5]);
    sortCharArray.mockReturnValue(['a', 'e', 'v']);
    addTwoNos.mockReturnValue(7);

    render(<CommonServiceFileCompo />);

    // Wait for user details to be displayed
    await waitFor(() => {
      expect(screen.getByText(/User Details/i)).toBeInTheDocument();
      expect(screen.getByText(/ID: 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Name: Leanne Graham/i)).toBeInTheDocument();
      expect(screen.getByText(/Username: Bret/i)).toBeInTheDocument();
      expect(screen.getByText(/Email: Sincere@april.biz/i)).toBeInTheDocument();
    });

    // Check if the arrays and addition are displayed correctly
    expect(screen.getByText(/Sorted Integer Array: 2, 3, 5, 5/i)).toBeInTheDocument();
    expect(screen.getByText(/Sorted Character Array: a, e, v/i)).toBeInTheDocument();
  });

  it('should handle error state when fetching user details', async () => {
    // Mock the fetchUserDetailService to return an observable that throws an error
    fetchUserDetailService.mockReturnValue(throwError(() => new Error('Network error')));

    render(<CommonServiceFileCompo />);

    // Wait for the error message to be displayed
    await waitFor(() => {
      expect(screen.getByText(/Error: Network error/i)).toBeInTheDocument();
    });
  });

  it('should correctly call sorting and addition functions', async () => {
    const mockUser = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    };

    // Mock the fetchUserDetailService to return an observable with the user data
    fetchUserDetailService.mockReturnValue(of({ data: mockUser }));

    // Mock the sorting and addition functions
    sortIntegerArray.mockReturnValue([2, 3, 5, 5]);
    sortCharArray.mockReturnValue(['a', 'e', 'v']);
    addTwoNos.mockReturnValue(7);

    render(<CommonServiceFileCompo />);

    // Wait for sorting and addition to happen
    await waitFor(() => {
      expect(sortIntegerArray).toHaveBeenCalledWith([3, 5, 2, 5]);
      expect(sortCharArray).toHaveBeenCalledWith(['e', 'v', 'a']);
      expect(addTwoNos).toHaveBeenCalledWith(2, 5);
    });
  });

  it('should call sortIntMethod, sortCharMethod, and additionMethod after incrementing count', async () => {
    // Mock the return values for the mocked methods
    sortIntegerArray.mockReturnValue([2, 3, 5, 5]);
    sortCharArray.mockReturnValue(['a', 'e', 'v']);
    addTwoNos.mockReturnValue(7);

    // Render the component
    render(<CommonServiceFileCompo />);

    // Ensure the button is in the document
    const incrementButton = screen.getByText(/Increment \+/i);
    expect(incrementButton).toBeInTheDocument();

    // Simulate a button click to increment the count
    fireEvent.click(incrementButton);

    // Wait for the methods to be called after the count changes
    await waitFor(() => {
      expect(sortIntegerArray).toHaveBeenCalledWith([3, 5, 2, 5]);
      expect(sortCharArray).toHaveBeenCalledWith(['e', 'v', 'a']);
      expect(addTwoNos).toHaveBeenCalledWith(2, 5);
    });

    // Verify that the sorting and addition methods were called after increment
    //expect(sortIntegerArray).toHaveBeenCalledTimes(1);
    //expect(sortCharArray).toHaveBeenCalledTimes(1);
    //expect(addTwoNos).toHaveBeenCalledTimes(1);
  });
});
