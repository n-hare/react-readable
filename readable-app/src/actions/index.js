import { getData } from '../utils/apiHelpers'
export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const CAST_VOTE = 'CAST_VOTE'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const DELETE_PARENT = 'DELETE_PARENT'
export const CREATE_CATEGORY = 'CREATE_CATEGORY'

export function createPost({id, timestamp, title, body, author, category, voteScore = 0 }) {
  return {
    type: CREATE_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore
  }
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    id
  }
}

export const getPosts = (path = '/posts') => dispatch => (
  getData(path)
  .then(posts => posts.map(post=>dispatch(createPost(post))))
)

export function castVote(id, vote) {
  return {
    type: CAST_VOTE,
    id,
    vote
  }
}

export function createComment({id, parentid, timestamp, body, author, voteScore = 0 }) {
  return {
    type: CREATE_COMMENT,
    id,
    parentid,
    timestamp,
    body,
    author,
    voteScore
  }
}

export function deleteComment(id) {
  return {
    type: DELETE_COMMENT,
    id
  }
}
export function deleteParent(parentid) {
  return {
    type: DELETE_PARENT,
    parentid
  }
}

export function createCategory(category) {
  return {
    type: CREATE_CATEGORY,
    category
  }
}
export const getCategories = () => dispatch => (
  getData('/categories').then(({categories}) => dispatch(createCategory(categories)))
)

