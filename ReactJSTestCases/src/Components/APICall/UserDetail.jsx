// src/Components/UserDetail.js
import React, { Component } from 'react';
import { fetchUserDetailService } from './fetchUserDetailService'; // Adjust the import path

class UserDetail extends Component {
  intArra = [3,5,2,5]
  charArra = ['e','v','a']
  state = {
    userId: 1, // Default user ID to fetch
    user: null,
    loading: true,
    error: null,
    sortInt:null,
    sortChar:null,
    addition:0
  };

  componentDidMount() {
    this.fetchUserDetails();
    this.setState({sortInt:this.sortIntegerArray(this.intArra)})
    this.setState({sortChar:this.sortCharArray(this.charArra)})
    this.addTwoNos(2,5)
  }

  fetchUserDetails = () => {
    fetchUserDetailService(this.state.userId).subscribe({
      next: (response) => {
        this.setState({ user: response.data, loading: false });
      },
      error: (err) => {
        this.setState({ error: err.message, loading: false });
      },
    });
  };

  addTwoNos = (a,b) => {
    this.setState({ addition: a+b })
  }

  sortIntegerArray=(arr)=>{
    return arr.sort((a,b)=>a-b)
  }

  sortCharArray=(arr)=>{
    return arr.sort((a,b)=>a.localeCompare(b))
  }


  render() {
    const { loading, user, error, sortInt, sortChar } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <>
      <div>
        <h2>User Details</h2>
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
      </div>
      <div>
       Sort array Integer: {sortInt}
       Sort array Character: {sortChar}
      </div>
      </>
    );
  }
}

export default UserDetail;
