import Image from "next/image"

interface Post {
   userId: number;
   id: number;
   title: string;
   body: string;
}

interface User {
   id: number;
   name: string;
   username: string;
   email: string;
   address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
         lat: string;
         lng: string;
      };
   };
   phone: string;
   website: string;
   company: {
      name: string;
      catchPhrase: string;
      bs: string;
   };
}

interface Dog {
   message: string;
   status: string;
}

const getPostsData = async () => {
   const res = await fetch("https://jsonplaceholder.typicode.com/posts")
   return res.json()
}

const getUsersData = async () => {
   const res = await fetch("https://jsonplaceholder.typicode.com/users")
   return res.json()
}

const getDogData = async () => {
   const res = await fetch("https://dog.ceo/api/breeds/image/random", { cache: "no-store" })
   return res.json()
}

const getDogData10Sec = async () => {
   const res = await fetch("https://dog.ceo/api/breeds/image/random", { next: { revalidate: 10 } })
   return res.json()
}

export default async function Page() {
   const [posts, users, dog, dog10Sec] = await Promise.all([getPostsData(), getUsersData(), getDogData(), getDogData10Sec()])

   return (
      <main className='juli'>
         <section>
            <h1>Posts</h1>
            {posts.map((post: Post) => {
               return <div>{post.title}</div>
            })}
         </section>
         <section>
            <h1>Dog</h1>
            <Image src={dog.message} alt="dog" width={300} height={300} />
         </section>
         <section>
            <h1>Dog 10 Seconds</h1>
            <Image src={dog10Sec.message} alt="dog" width={300} height={300} />
         </section>
         <section>
            <h1>Users</h1>
            {users.map((user: User) => {
               return <div>{user.name}</div>
            })}
         </section>
      </main>
   )
}
