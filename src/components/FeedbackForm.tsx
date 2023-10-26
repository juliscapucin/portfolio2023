'use client';

type FormInputProps = {
 label: string;
 type: string;
 id: string;
};

const FormInput = ({ label, type, id }: FormInputProps) => {
 return (
  <div className='flex flex-col'>
   <label htmlFor='name'>{label}:</label>
   {type === 'textarea' ? (
    <textarea id='name' placeholder={label} rows={5} />
   ) : (
    <input type='text' id='name' placeholder={label} />
   )}
  </div>
 );
};

export default function FeedbackForm() {
 return (
  <section className='grid grid-cols-12'>
   <form action='' className='col-span-4'>
    <FormInput label='Name' type='text' id='name' />
    <FormInput label='Message' type='textarea' id='message' />
    <button className='mt-16'>Submit</button>
   </form>
  </section>
 );
}
