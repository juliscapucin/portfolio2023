'use client';

import { SearchManufacturer } from '@/components';

export default function SearchBar() {
 const handleSearch = () => {};

 return (
  <form className='searchbar' onSubmit={handleSearch}>
   <div className='searchbar__item'>
    <SearchManufacturer />
   </div>
  </form>
 );
}
