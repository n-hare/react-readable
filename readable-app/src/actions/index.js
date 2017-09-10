import { deleteData, getData, postData } from '../utils/apiHelpers'
export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const CAST_VOTE = 'CAST_VOTE'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_PARENT = 'DELETE_PARENT'
export const CREATE_CATEGORY = 'CREATE_CATEGORY'
export const UPDATE_UI = 'UPDATE_UI'

//User Post Actions
export function createPost({id, timestamp, title, body, author, category, voteScore = 0, deleted= false }) {
  return {
    type: CREATE_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore,
    deleted
  }
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    id
  }
}

export const deletePostAPI = (id) => dispatch => (
  deleteData(`/posts/${id}`)
    .then(() => dispatch(deletePost(id)))
    .then(() => dispatch(deleteParent(id)))
)

export const getPosts = (path = '/posts') => dispatch => (
  getData(path)
  .then(posts => posts.map(post=> {
    getData(`/posts/${post.id}/comments`)
    .then(comments => comments.map(comment => dispatch(createComment(comment))))
    return dispatch(createPost(post))
  }))
)

//Vote Actions
export function castVote(id, vote) {
  return {
    type: CAST_VOTE,
    id,
    vote
  }
}

export const postVote = (id, vote) => dispatch => {
  const option= {option: vote > 0 ? 'upVote' : 'downVote'}
  return (
    postData(`/posts/${id}`, JSON.stringify(option))
    .then(dispatch(castVote(id, vote)))
  )
}

//Comment Actions
export function createComment({id, parentId, timestamp, body, author, voteScore = 0 }) {
  return {
    type: CREATE_COMMENT,
    id,
    parentId,
    timestamp,
    body,
    author,
    voteScore
  }
}

export function deleteComment(parentId, id) {
  return {
    type: DELETE_COMMENT,
    parentId,
    id
  }
}

export const deleteCommentAPI = (parentId, id) => dispatch => (
  deleteData(`/comments/${id}`)
    .then(() => dispatch(deleteComment(parentId, id)))
)

export function deleteParent(parentId) {
  return {
    type: DELETE_PARENT,
    parentId
  }
}


//Category Actions
export function createCategory(category) {
  return {
    type: CREATE_CATEGORY,
    category
  }
}

export const getCategories = () => dispatch => (
  getData('/categories').then(({categories}) => dispatch(createCategory(categories)))
)

//UI Actions
export const updateUI = (ui, payload) => ( { type: UPDATE_UI, ui, payload } )



