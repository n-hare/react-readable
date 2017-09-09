import { SORT_BY } from '../actions'

function ui(state={sortPostsByVotes: true}, action) {
  switch (action.type) {
    case SORT_BY:
      return [
      ...state
      ]
    default:
      return state
  }
}

export default ui