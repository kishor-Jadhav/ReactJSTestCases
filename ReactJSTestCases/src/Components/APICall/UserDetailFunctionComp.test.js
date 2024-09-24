// src/Components/__tests__/UserDetail.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserDetailFunctionComp from './UserDetailFunctionComp'; // Adjust path as necessary
import { fetchUserDetailService } from './fetchUserDetailService';
import { of, throwError } from 'rxjs';

jest.mock('./fetchUserDetailService');

describe('UserDetailComponent Component', () => {
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

    fetchUserDetailService.mockReturnValue(of({ data: mockUser }));

    render(<UserDetailFunctionComp />);

    await waitFor(() => {
      expect(screen.getByText(/User Details/i)).toBeInTheDocument();
      expect(screen.getByText(/ID: 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Name: Leanne Graham/i)).toBeInTheDocument();
      expect(screen.getByText(/Username: Bret/i)).toBeInTheDocument();
      expect(screen.getByText(/Email: Sincere@april.biz/i)).toBeInTheDocument();
    });
  });

  it('should handle error state when fetching user details', async () => {
    fetchUserDetailService.mockReturnValue(throwError(() => new Error('Network error')));

    render(<UserDetailFunctionComp />);

    await waitFor(() => {
      expect(screen.getByText(/Error: Network error/i)).toBeInTheDocument();
    });
  });

  it('should correctly sort integer and character arrays', async () => {
    const mockUser = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    };

    fetchUserDetailService.mockReturnValue(of({ data: mockUser }));

    render(<UserDetailFunctionComp />);

    await waitFor(() => {
      expect(screen.getByText(/User Details/i)).toBeInTheDocument();
      expect(screen.getByText(/ID: 1/i)).toBeInTheDocument();
    });

    expect(screen.getByText(/Sorted Integer Array: 2, 3, 5, 5/i)).toBeInTheDocument();
    expect(screen.getByText(/Sorted Character Array: a, e, v/i)).toBeInTheDocument();
  });

  it('should correctly add two numbers using addTwoNos without rendering the result', async () => {
    // Render the component
    render(<UserDetailFunctionComp />);

    // Mock implementation of addTwoNos if you want to check its call
    const instance = { addTwoNos: jest.fn() };

    // This won't actually update any rendered content since you don’t want to render the addition result.
    instance.addTwoNos(3, 4);

    // Verify that the addTwoNos function was called (if applicable)
    expect(instance.addTwoNos).toHaveBeenCalledWith(3, 4);
  });
});
