import React from 'react';

export default function Improveskills() {
    const lists=[
        "Learn new recepies",
        "Experiment with food",
        "Write your own recepies",
        "Know nutrition facts",
        "Get cokking tips",
        "Get ranked",
    ]
  return (
    <div className='section improveskills'>
    <div className='col img'>
        <img src='/img/gallery/img_10.jpg' alt=''/>
    </div>
    <div className='col typograpy'>
        <h1 className='title'>Improve your Culinary Skills</h1> 
        {lists.map((list,i)=>

            <p className='skill-items' key={i}>{list}</p>
        
        )}     
        <button className='btn'>signUp Now</button>
    </div>

</div>
  );
}
