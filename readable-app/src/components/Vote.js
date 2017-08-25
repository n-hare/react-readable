import React from 'react';
import { TiArrowSortedUp, TiArrowSortedDown} from 'react-icons/lib/ti'

const Vote = ({voteScore}) => {
  return (
    <div className='vote__wrapper' >
      <TiArrowSortedUp className='vote__arrow vote__upArrow' />
      <div>
        {voteScore}
      </div>
      <TiArrowSortedDown className='vote__arrow vote__downArrow' />
    </div>
  )
}

export default Vote;
