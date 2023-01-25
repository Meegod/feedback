import React from 'react'
import PostItem from './PostItem';

function PostList() {
  const posts=[{id:1,title: 'a title', body: 'a body'}];



  return (
    <ul>
        {posts.map((post)=>(
            <PostItem key={post.id} post={post}/>
        ))}
    </ul>
    
  )
}

export default PostList