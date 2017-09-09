import React from 'react'
import { connect } from 'react-redux'
import { postVote } from '../actions/index'
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/lib/ti'

const Vote = (props) => {
  return (
    <div className='vote__wrapper' >
      <TiArrowSortedUp className='vote__arrow vote__upArrow' onClick={ () => props.dispatch(postVote(props.post_id, 1)) }/>
      <div className='vote__score'>
        {props.voteScore}
      </div>
      <TiArrowSortedDown className='vote__arrow vote__downArrow' onClick={ () => props.dispatch(postVote(props.post_id, -1)) }/>
    </div>
  )
}

export default connect()(Vote);
