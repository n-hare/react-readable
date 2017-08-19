import {CREATE_POST, DELETE_POST } from '../actions'

function post(state = {}, action) {
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
          deleted: false
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
    default:
      return state
  }
}

export default post;