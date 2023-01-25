import React from 'react'
import FeedbackItem from './FeedbackItem';

function FeedbackList({feedback,handleDelete}) {
  if(!feedback || feedback.length ===0){
    return <p>No feedback Yet</p>
  }

  return (
    <div className='feedback-list'>
      {feedback.map((item)=>(
        <FeedbackItem item={item} key={item.id} 
        handleDelete={handleDelete}/>
        


))}
    </div>
  )
}

export default FeedbackList