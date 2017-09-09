import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { TiArrowRightThick } from 'react-icons/lib/ti'
import { updateUI } from '../actions/index';

const Filters = ({categories, dispatch, params, sortPostsByVotes}) => {
  return (
    <div>
      <div className='filter__header'>
        <h2>Showing: {params ? params : 'all'}</h2>
        <div className='sort__row'>
          <label className='sort__ui btn'>Time</label>
          <span className='sort__arrow_wrapper' onClick={ ()=> dispatch(updateUI('sortPostsByVotes', !sortPostsByVotes))} >
            <TiArrowRightThick className={sortPostsByVotes ? 'sort__arrow__right' :'sort__arrow__left'} width='2rem' height='2rem' />
          </span>
          <label className='sort__ui btn' >Votes</label>
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

const mapStateToProps = (state, props) => {
  return ({
    sortPostsByVotes: state.ui.sortPostsByVotes,
    ...props
  })
}


export default connect(mapStateToProps)(Filters)