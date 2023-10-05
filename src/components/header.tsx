import { useEffect, useState } from 'react';
import { MenuDesktop, MenuMobile } from '.';

type NavbarData = {
 items: { title: string; slug: string; _key: string }[];
};

export default function Header() {
 const [data, setData] = useState<NavbarData | null>(null);

 //  Fetch data from api Route Handler (api/navbar)
 useEffect(() => {
  const fetchData = async () => {
   const response = await fetch('/api/navbar');
   const data = await response.json();
   setData(data);
  };

  fetchData();
 }, []);

 return (
  <>
   {data ? (
    <header className='fixed top-0 z-50 w-full max-w-desktop'>
     <MenuDesktop navLinks={data.items} />
     <MenuMobile navLinks={data.items} />
    </header>
   ) : (
    <span>Loading...</span>
   )}
  </>
 );
}
