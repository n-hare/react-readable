import {CREATE_COMMENT, DELETE_COMMENT, DELETE_PARENT } from '../actions'

function comments(state = {}, action) {
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
            ...state[action.parentid][action.id],
            deleted: true
          }
        }
      }
    case DELETE_PARENT:
      const comments = [action.parentid] in state ? Object.keys(state[action.parentid]) : 0
      if (comments.length > 0) {
        const updateChildComments = Object.keys(state[action.parentid]).reduce((prev, current)=>{
          prev[current] = {...state[action.parentid][current], parentDeleted: true}
          return prev
        },{})
        return {
          ...state,
          [action.parentid]: updateChildComments
        }
      }else{
        return state
      }
    default:
      return state
  }
}

export default comments;

// Help with Object.keys from https://stackoverflow.com/a/14810722