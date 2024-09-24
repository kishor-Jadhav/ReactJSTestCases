import axios from "axios"; 
import { from, of } from "rxjs";
export const addTwoNos = (a, b) => {
    return a + b
  };

export const sortIntegerArray = (arr) => {
    return arr.sort((a, b) => a - b);
  };

export  const sortCharArray = (arr) => {
    return arr.sort((a, b) => a.localeCompare(b));
  };  

export const fetchUserDetailService =(userId) => {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    return from(axios.get(url)); // Return an observable
  };  

  