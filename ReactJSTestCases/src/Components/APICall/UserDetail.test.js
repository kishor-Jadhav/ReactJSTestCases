// src/Components/__tests__/UserDetail.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserDetail from './UserDetail'; // Adjust path as necessary
import { fetchUserDetailService } from './fetchUserDetailService';
import { of, throwError } from 'rxjs';

jest.mock('./fetchUserDetailService');

describe('UserDetail Component', () => {
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

    render(<UserDetail />);

    

    // Wait for user details to be displayed
    await waitFor(() => {
      expect(screen.getByText(/User Details/i)).toBeInTheDocument();
      expect(screen.getByText(/ID: 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Name: Leanne Graham/i)).toBeInTheDocument();
      expect(screen.getByText(/Username: Bret/i)).toBeInTheDocument();
      expect(screen.getByText(/Email: Sincere@april.biz/i)).toBeInTheDocument();
    });
  });

  it('should correctly add two numbers using addTwoNos without rendering the result', () => {
    const userDetailRef = React.createRef();

    // Render the component with the ref
    render(<UserDetail ref={userDetailRef} />);
    
    // Access the component instance using the ref
    const userDetailInstance = userDetailRef.current;

    // Trigger addTwoNos method manually
    userDetailInstance.addTwoNos(3, 4);

    // Check the state to see if the addition is correct
    expect(userDetailInstance.state.addition).toBe(7);
  });
 
});
