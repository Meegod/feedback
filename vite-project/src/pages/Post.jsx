import React from 'react'
import {Navigate,useNavigate} from react-router-dom;

function Post() {
    const navigate =useNavigate();

    const onClick =()=>{
        console.log('Hello');
        navigate('/about');
    }
  return (
  <div>
    <button onClick={onClick}>Click</button>
  </div>
  )
}

export default Post