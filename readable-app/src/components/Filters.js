import React from 'react';
import { Link } from 'react-router-dom';

const Filters = ({params, categories}) => {
  return (
    <div>
      <h2>Showing: {params ? params : 'all'}</h2>
      <ul className='filter__row'>
        {categories.map((filter, index) => {
          return(
            <li key={index}>
              <Link to={`/${filter.path}`} className='filter__link'>
                {filter.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}



export default Filters