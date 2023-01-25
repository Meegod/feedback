import React from 'react'

function PostItem({post:{title,id,body}}) {
  return (

    <li>{title}
    <p>{body}</p>
    <div>
        <i className='fas fa-edit'></i>
        <i className='fas fa-trash'></i>
    </div>
    </li>
    
  )
}

export default PostItem