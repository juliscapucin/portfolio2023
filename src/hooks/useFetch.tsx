import { useEffect, useState } from 'react';

export function useFetch(apiUrl: string) {
 const [data, setData] = useState(null);

 useEffect(() => {
  const fetchData = async () => {
   const response = await fetch(apiUrl);
   const data = await response.json();
   setData(data);
  };

  fetchData();
 }, []);

 return data;
}
