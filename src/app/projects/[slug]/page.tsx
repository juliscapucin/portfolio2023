import Image from "next/image"
import '../../../styles/styles.css'

export default function Page({ params }: any) {
   return (
      <main className='juli'>
         <h1>Projects {params.slug}</h1>
      </main>
   )
}
