// src/services/__tests__/fetchUserDetailService.test.js
import axios from 'axios';
import { fetchUserDetailService } from './fetchUserDetailService'; // Adjust path as necessary
import { of } from 'rxjs';
import { toArray } from 'rxjs/operators';

jest.mock('axios');

describe('fetchUserDetailService', () => {
  it('should fetch user details and return an observable', (done) => {
    const userId = 1;
    const mockResponse = {
      data: {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz'
      }
    };

    // Mock axios.get to return a resolved promise
    axios.get.mockResolvedValue(mockResponse);

    // Call the service
    const observable = fetchUserDetailService(userId);

    // Subscribe to the observable and collect results
    observable.pipe(toArray()).subscribe((result) => {
        const userId = 1;
      // Assertions
      expect(result).toEqual([mockResponse]); // Ensure the result matches the mock response
      expect(axios.get).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/users/${userId}`); // Check that axios.get was called with the correct URL
      done(); // Call done to indicate the async test is complete
    });
  });
});
