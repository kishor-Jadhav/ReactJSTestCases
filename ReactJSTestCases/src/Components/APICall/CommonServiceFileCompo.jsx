// src/Components/UserDetail.js
import React, { useEffect, useState } from 'react';
import { fetchUserDetailService } from './fetchUserDetailService'; // Adjust the import path
import { addTwoNos, sortCharArray, sortIntegerArray } from './commonServiceFile';

const CommonServiceFileCompo = () => {
  const intArra = [3, 5, 2, 5];
  const charArra = ['e', 'v', 'a'];

  const [userId] = useState(1); // Default user ID to fetch
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortInt, setSortInt] = useState(null);
  const [sortChar, setSortChar] = useState(null);
  const [addition, setAddition] = useState(0);

  const [count, setcount] = useState(0);
  const sortIntMethod=()=>{
    setSortInt(sortIntegerArray(intArra));
  }
  const sortCharMethod=()=>{
    setSortChar(sortCharArray(charArra));
  }
  const additionMethod=()=>{
    setAddition(addTwoNos(2, 5));
  }
  const HandleIncrement=()=>{
    setcount(count+1)
  }
  useEffect(() => {     
    sortIntMethod()
    sortCharMethod();
    additionMethod();
  }, [count]); 
  useEffect(() => {
    fetchUserDetails();
    setSortInt(sortIntegerArray(intArra));
    setSortChar(sortCharArray(charArra));
    setAddition(addTwoNos(2, 5));
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

  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


 
  return (
    <>
    <h1> This is  CommonService Function Component</h1>
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
       
      <div>
        <button onClick={HandleIncrement}> Increment +</button>
      </div>
    </>
  );
};

export default CommonServiceFileCompo;
