import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function ChiefsCard({chief}) {
  return <div className='cheif-card'>
    <img src={chief.img} alt=' '/>
    <div className='chief-card-info'>
        <h3 className='chief-card-name'>{chief.name}</h3> 
        <p className='chief-recipe-count'>Recipes: <b>{chief.recipesCount}</b></p>
        <p className='chief-cuisine'>Cuisine: <b>{chief.cuisine}</b></p>
        <p className='cheif-icons'>
            <FontAwesomeIcon icon={faFacebookF}/>
            <FontAwesomeIcon icon={faTwitter}/>        
            <FontAwesomeIcon icon={faInstagram}/>
        </p>
     </div>

  </div>;
}
