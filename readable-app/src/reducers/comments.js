import {CREATE_COMMENT, DELETE_COMMENT, DELETE_PARENT, CAST_VOTE_COMMENT } from '../actions'

function comments(state = {}, action) {
  switch (action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        [action.parentId]: {
          ...state[action.parentId],
          [action.id]: {
            id: action.id,
            parentId: action.parentId,
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
        [action.parentId]: {
          ...state[action.parentId],
          [action.id]: {
            ...state[action.parentId][action.id],
            deleted: true
          }
        }
      }

    case DELETE_PARENT:
      const comments = [action.parentId] in state ? Object.keys(state[action.parentId]) : 0
      if (comments.length > 0) {
        const updateChildComments = Object.keys(state[action.parentId]).reduce((prev, current)=>{
          prev[current] = {...state[action.parentId][current], parentDeleted: true}
          return prev
        },{})
        return {
          ...state,
          [action.parentId]: updateChildComments
        }
      }else{
        return state
      }

    case CAST_VOTE_COMMENT:
      return {
        ...state,
        [action.parentId]: {
          ...state[action.parentId],
          [action.id]: {
            ...state[action.parentId][action.id],
            voteScore: state[action.parentId][action.id].voteScore + action.vote
          }
        }
      }

    default:
      return state
  }
}

export default comments;

// Help with Object.keys in DELETE_POST from  https://stackoverflow.com/a/14810722