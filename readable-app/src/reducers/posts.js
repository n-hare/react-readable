import {CREATE_POST, DELETE_POST, CAST_VOTE_POST } from '../actions'

function posts(state = {}, action) {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          timestamp: action.timestamp,
          title: action.title,
          body: action.body,
          author: action.author,
          category: action.category,
          voteScore: action.voteScore,
          deleted: action.deleted || false
        }
      }

    case DELETE_POST:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          deleted: true
        }
      }

    case CAST_VOTE_POST:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: state[action.id].voteScore + action.vote
        }
      }

    default:
      return state
  }
}

export default posts;