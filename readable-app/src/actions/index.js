export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

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