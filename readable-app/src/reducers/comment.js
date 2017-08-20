import {CREATE_COMMENT, DELETE_COMMENT } from '../actions'

function post(state = {}, action) {
  switch (action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        [action.parentid]: {
          ...state[action.parentid],
          [action.id]: {
            id: action.id,
            parentid: action.parentid,
            timestamp: action.timestamp,
            body: action.body,
            author: action.author,
            voteScore: action.voteScore,
            deleted: false,
            parentDeleted: false
          }
        }
      }
    case DELETE_COMMENT:
      return {
        ...state,
        [action.parentid]: {
          ...state[action.parentid],
          [action.id]: {
            ...state[action.id],
            deleted: true
          }
        }
      }
    default:
      return state
  }
}

export default post;