import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button';
import { useState } from 'react'
import RatingSelect from './RatingSelect';

function FeedbackForm({handleAdd}) {
  const[text,setText] =useState('');
  const[rating,setRating] =useState(10);
  const[btnDisable,setBtnDisable]=useState(true)
  const[message,setMessage]=useState("");

   
const handleTextChange =(e)=>{
  if(text ===''){
    setBtnDisable(true);
    setMessage(null);
  }else if(text !=='' && text.trim().length<=10){

    setMessage('Text must be atleast 10 character')
    setBtnDisable(true);
  }else{
    setMessage(null);
    setBtnDisable(false);
  }
  setText(e.target.value);
}

const handleSubmit = (e)=>{
  e.preventDefault();
  if(text.trim().length > 10){
      const newFeedback = {
          text,
          rating,
      }
      handleAdd(newFeedback);
      setText('');
  }
}





  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate youe service with us?</h2>

          <RatingSelect
           select={(rating)=>setRating(rating)}
          
          />
     <div className="input-group">
        <input 
        onChange={handleTextChange}
        type='text' placeholder='Write a review'
        value={text}/>

        <Button type='submit' 
        isDisabled={btnDisable}
        version='secondary'>Send</Button>
     </div>
     {message && <div className='message'>
      {message}
      </div>}
        </form>
    </Card>
  )

}

export default FeedbackForm