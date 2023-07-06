import Image from "next/image"

const getPostsData = async () => {
   const res = await fetch("https://jsonplaceholder.typicode.com/posts")
   return res.json()
}

export default async function Page() {
   const posts = await getPostsData()

   return (
      <main className='juli'>
         <h1>Posts</h1>
         <section>
            {posts.map(post => {
               return <div>{post.title}</div>
            })}
         </section>
      </main>
   )
}
