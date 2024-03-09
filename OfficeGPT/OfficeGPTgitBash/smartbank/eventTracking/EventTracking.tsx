// Import any necessary modules for making network requests (e.g., Axios).

import { useState } from "react";

export function trackEvent(eventData) {
  const apiUrl1 = 'http://192.168.202.132:8000/fetchData';
  const apiUrl2 = 'http://192.168.202.132:8000/assistant'; // Replace with the actual second API address


  
  // Construct the payload with event name and data
  const eventDataJson = JSON.stringify(eventData);

  // First API Call
   fetch(apiUrl1, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: eventDataJson,
  })
    .then((response) => {
      if (response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          return response.json();
        } else {
          return response.text();
        }
      } else {
        throw new Error('Network request failed');
      }
    })
    .then((data) => {
      if (typeof data === 'string') {
        console.log(data);
        // setMessage(data.message);
      } else {
        console.log( data);
        
        // You can update your component state or perform any other action with the JSON data.
      }
    })
    .catch((error) => {
      console.error('Failed to fetch data from the first API:', error);
    });

  // Second API Call
  return fetch(apiUrl2, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: eventDataJson,
  })
    .then((response) => {
      if (response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          return response.json();
        } else {
          return response.text();
        }
      } else {
        throw new Error('Network request failed');
      }
    })
    .then((data) => {
      if (typeof data === 'string') {
        console.log(data);
        return data;
      } else {
        console.log(data);
        // You can update your component state or perform any other action with the JSON data.
        return data;
      }

    })
    .catch((error) => {
      console.error('Failed to fetch data from the second API:', error);
    });

}
