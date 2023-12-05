'use client';

import { useState } from 'react';

type FormData = {
 name: string;
 message: string;
};

export default function FeedbackForm() {
 const [formData, setFormData] = useState<FormData>({ name: '', message: '' });

 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
 ) => {
  const { name, value } = e.target;
  setFormData((prevState) => ({ ...prevState, [name]: value }));
 };

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log('Form Data:', formData);
  // Handle form submission, e.g., send data to API
 };

 return (
  <section className='grid grid-cols-12'>
   <form onSubmit={handleSubmit} className='col-span-4'>
    <div className='flex flex-col border-b border-secondary mt-16 relative'>
     <label
      className={`absolute top-0 left-0 transition-transform duration-200 ease-in-out ${
       formData.name ? '-translate-y-10' : 'opacity-0'
      }`}
      htmlFor={'name'}
     >
      Name:
     </label>
     <input
      className='custom-focus-visible bg-transparent border-none w-full'
      type='text'
      id={'name'}
      name='name'
      placeholder={'Name'}
      value={formData.name}
      onChange={handleChange}
     />
    </div>

    <div className='flex flex-col border-b border-secondary mt-16 relative'>
     <label
      className={`absolute top-0 left-0 transition-transform duration-200 ease-in-out ${
       formData.message ? '-translate-y-10' : 'opacity-0'
      }`}
      htmlFor={'message'}
     >
      Message:
     </label>
     <textarea
      className='custom-focus-visible bg-transparent w-full ml-[2px] outline-none border border-secondary'
      id={'message'}
      name='message'
      placeholder={'Message'}
      rows={5}
      value={formData.message}
      onChange={handleChange}
     />
    </div>
    <button className='mt-16'>Submit</button>
   </form>
  </section>
 );
}
