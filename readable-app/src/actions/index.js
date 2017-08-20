export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

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

export function deletePost({id}) {
  return {
    type: DELETE_POST,
    id
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

export function deleteComment({id}) {
  return {
    type: DELETE_COMMENT,
    id
  }
}