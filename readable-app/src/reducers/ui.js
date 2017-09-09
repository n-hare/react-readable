import { SORT_BY } from '../actions'

function ui(state={sortPostsByVotes: true}, action) {
  switch (action.type) {
    case SORT_BY:
      return {
      ...state,
      [action.ui]: action.bool
      }
    default:
      return state
  }
}

export default ui