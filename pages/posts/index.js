import React from 'react'
import Head from 'next/head'
import Link from 'next/link';


function posts(props) {
  return (

    <div >
       <Head>
            <title>Posts</title>
            <meta title='description' content='anything'/>
        </Head>
      {props.post.map(post=>(
        <div  key={post.id}>
          <Link href={`/posts/${post.id}`}>
          
          {post.title}
      </Link >
        </div>))}
        index posts
        </div>
  )
  
}
export async function getStaticProps(){
  const res= await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const data= await res.json();
  return {
    props:{
      post : data
    }
  }
}



export default posts