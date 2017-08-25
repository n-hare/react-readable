import React from 'react';
import { Link } from 'react-router-dom';

const Filters = ({category}) => {
   const categoryFilters = ['all', 'react', 'redux', 'udacity']
  return (
    <div>
      <h2>Showing: {category ? category : 'all'}</h2>
      <ul className='filter__row'>
        {categoryFilters.map((filter, index) => {
          return(
            <li key={index}>
              <Link to={filter === 'all' ? '/' : `/${filter}`} className='filter__link' >
                {filter}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Filters