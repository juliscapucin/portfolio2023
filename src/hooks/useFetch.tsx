import { useEffect, useState } from 'react';

export function useFetch(apiUrl: string) {
 const [data, setData] = useState(null);
 const [error, setError] = useState(null);

 useEffect(() => {
  // Use the fetch API to make a GET request
  fetch(apiUrl)
   .then((response) => {
    // Check if the response status is OK (200)
    if (!response.ok) {
     throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON response
   })
   .then((responseData) => {
    setData(responseData); // Set the data in state
   })
   .catch((error) => {
    setError(error); // Handle any errors that occurred
   });
 }, []); // Make the request when the component mounts

 if (data) {
  console.log(data);
  return data;
 }
}
