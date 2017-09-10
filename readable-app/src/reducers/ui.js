import { UPDATE_UI } from '../actions'

function ui(state={sortPostsByVotes: true, editComment: {} }, action) {
  switch (action.type) {
    case UPDATE_UI:
      return {
        ...state,
        [action.ui]: action.payload
      }
    default:
      return state
  }
}

export default ui