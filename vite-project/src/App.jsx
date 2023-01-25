import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import {v4 as uuidV4} from 'uuid';
import { useState } from 'react';
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import './App.css';
import feedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
// import Abouticonlink from './components/Abouticonlink';
// import Aboutpage from './pages/Aboutpage';

function App() {

  const[feedback,setFeedback]=useState(feedbackData);
  console.log(feedback);

  const deleteFeedback=(id)=>{
    if(window.confirm('Are you sure you want to delete')){
      setFeedback(feedback.filter((item)=>item.id !==id))   
    } }

    const addFeedback =(newFeedback)=>{
       newFeedback.id =uuidV4();
       console.log(newFeedback);
       setFeedback([newFeedback,...feedback]);
    }
  return (
    
    <Router> 
    <Header text='feedbackUi' bgColor='red' textColor='blue'/>
    <div className='container'>
    <Routes>
    <Route exact path='/'   element={
      <>
       <FeedbackForm handleAdd={addFeedback}/> 
    <FeedbackStats feedback={feedback}/>
    <FeedbackList feedback={feedback}
    handleDelete={deleteFeedback}/>
      </>
    }/>

    </Routes>
    
    
    
  {/* <Route path='/about' component={Aboutpage}/> */}
  {/* <Abouticonlink/> */}
    </div>
     </Router>

  
    
  )
}

export default App;
