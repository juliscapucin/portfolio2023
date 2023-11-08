export default function Copyright() {
 const year = new Date().getFullYear();

 return (
  <div className='col-span-12 flex flex-col mb-16 mt-32 lg:mb-0'>
   <span>Juli Scapucin ©{year}</span>
  </div>
 );
}
