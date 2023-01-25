import React from 'react';
import Card from '../components/shared/Card';

function Aboutpage() {
  return (
    <Card>
        <div className='about'>
           <h1>About the project</h1> 
    <p>This is a React app to leave
        feedback for a product or
        services
    </p>
    <p>Version: 1.0.0</p>
    <p>
        <a href='/'>Back to Home</a>
    </p>
        </div>
    </Card>
  )
}

export default Aboutpage