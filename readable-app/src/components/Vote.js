import React from 'react'
import { connect } from 'react-redux'
import { postVote } from '../actions/index'
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/lib/ti'

const Vote = (props) => {
  return (
    <div className='vote__wrapper' >
      <TiArrowSortedUp className='vote__arrow vote__upArrow'
        onClick={ () => props.dispatch(postVote({ id:props.item_id, parentId: props.item_parentId || null }, 1, props.item_type)) } />
      <div className='vote__score'>
        {props.voteScore}
      </div>
      <TiArrowSortedDown className='vote__arrow vote__downArrow'
        onClick={ () => props.dispatch(postVote({ id:props.item_id, parentId: props.item_parentId || null }, -1, props.item_type)) } />
    </div>
  )
}

export default connect()(Vote);
