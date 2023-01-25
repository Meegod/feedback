import React from 'react';
import { useState } from 'react';


function Addpost({closeModal}) {
    const[title,setTitle] =useState('');
    const[body,setBody]=useState('');
    const[error,setError]=useState(false);




  return (
    <>
    <form onSubmit={validateInputs}>
        <input type='text' placeholder='Enter title'
        onChange={(e)=>setTitle(e.target.value)}/>
         <br />
        <br />
        <textarea
          placeholder='Enter body'
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <br />
        <br />
        <button type='submit'>Submit</button>
    </form>
    {error && <p>{error}</p>}
    </>
  )
}

export default Addpost