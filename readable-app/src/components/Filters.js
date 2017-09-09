import React from 'react'
import { Link } from 'react-router-dom'
import { TiArrowRightThick } from 'react-icons/lib/ti'

const Filters = ({params, categories}) => {
  return (
    <div>
      <div className='filter__header'>
        <h2>Showing: {params ? params : 'all'}</h2>
        <div className='sort__row'>
          <span className='btn sort__btn sort__btn__left sort__active'>Time</span>
          <TiArrowRightThick />
          <span className='btn sort__btn sort__btn__right'>Votes</span>
        </div>
      </div>
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