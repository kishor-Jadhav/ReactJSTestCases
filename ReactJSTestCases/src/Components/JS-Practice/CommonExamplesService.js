import axios from "axios";
import { from, Observable, Subject } from "rxjs";
const subjectObj = new Subject() 
export const getIntSortArray=(arr)=>{
return arr.sort((a,b)=>a-b)
}

export const getCharSortArray=(arr)=>{
    return arr.sort((a,b)=>a.localeCompare(b))
}

export function getRandomInt(min, max) {
    // Ensure the min and max are integers
    min = Math.ceil(min);
    max = Math.floor(max);
  
    // Generate a random integer between min and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const converToJSON=(arr)=>{
    return  JSON.stringify(arr)
}

export const getUniqeArray=(arr)=>{
    return  [...new Set( arr)]
}

export const getRXJSObservable=()=>{
    const obsevable = new Observable((sub)=>{
        sub.next('Fist Emit val')
        console.log('1-inside observsble')
        sub.next('Second Emit val')
        setTimeout(()=>{
            console.log('2-inside observsble')
            sub.next('After 500 msec')
        },500)
        console.log('3-inside observsble')
    })
    return obsevable;
}

export const getPromises=()=>{
    const promise = new Promise((resolve1,reject1)=>{
        let condition = false; // Simulate a condition (can be false to trigger reject)    
    setTimeout(() => {
        if (condition) {
            resolve1('Promise resolved successfully!');
        } else {
            reject1('Promise was rejected.');
        }
    }, 2000); // Simulate async behavior with a 2-second delay
    })
    return promise;
}

export const getSubjectObs=()=>{
    return subjectObj
}

export const setSubjectObs=(val)=>{
    subjectObj.next(val)
}

export const fetchUserDetailServiceObservable =(userId) => {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    return from(axios.get(url)); // Return an observable
}; 

export const fetchUserDetailServicePromese=(userId) => {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    return axios.get(url); // Return an observable
}; 

export const exampleOnSubjectObserver=()=>{
    let subjectobj = new Subject();

subjectobj.subscribe(data => console.log('sub1:', data)); // First subscription
subjectobj.next('data'); // Emitting the first value

subjectobj.subscribe(data => console.log('sub2:', data)); // Second subscription
subjectobj.next('more data'); // Emitting the second value

//Output -
/*
sub1: data
sub1: more data
sub2: more data
*/

console.log('start');
setTimeout(() => {
  console.log('time');
}, 0);
console.log('end');

//Output -
/*
start
end
time

*/

}