import { useEffect, useState } from 'react';
import { MenuDesktop, MenuMobile } from '.';

type NavbarData = {
 items: [{ title: string; url: string; _id: string }];
};

export default function Header() {
 const [data, setData] = useState<NavbarData | null>(null);

 //  Fetch data from api Route Handler (api/socials)
 useEffect(() => {
  const fetchData = async () => {
   const response = await fetch('/api/socials');
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
    <h1>Loading...</h1>
   )}
  </>
 );
}
