// src/Components/UserDetail.js
import React, { useEffect, useState } from 'react';
import { fetchUserDetailService } from './fetchUserDetailService'; // Adjust the import path

const UserDetailFunctionComp = () => {
  const intArra = [3, 5, 2, 5];
  const charArra = ['e', 'v', 'a'];

  const [userId] = useState(1); // Default user ID to fetch
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortInt, setSortInt] = useState(null);
  const [sortChar, setSortChar] = useState(null);
  const [addition, setAddition] = useState(0);

  useEffect(() => {
    fetchUserDetails();
    setSortInt(sortIntegerArray(intArra));
    setSortChar(sortCharArray(charArra));
    addTwoNos(2, 5);
  }, []); // Empty dependency array means this runs once after the first render

  const fetchUserDetails = () => {
    fetchUserDetailService(userId).subscribe({
      next: (response) => {
        setUser(response.data);
        setLoading(false);
      },
      error: (err) => {
        setError(err.message);
        setLoading(false);
      },
    });
  };

  const addTwoNos = (a, b) => {
    setAddition(a + b);
  };

  const sortIntegerArray = (arr) => {
    return arr.sort((a, b) => a - b);
  };

  const sortCharArray = (arr) => {
    return arr.sort((a, b) => a.localeCompare(b));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
    <h1> This is Function Component</h1>
      <div>
        <h2>User Details</h2>
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
      </div>
      <div>
        Sorted Integer Array: {sortInt && sortInt.join(', ')}
        <br />
        Sorted Character Array: {sortChar && sortChar.join(', ')}
      </div>
    </>
  );
};

export default UserDetailFunctionComp;
