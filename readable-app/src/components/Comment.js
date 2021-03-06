import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { TiPencil, TiTrash} from 'react-icons/lib/ti'
import { deleteCommentAPI, updateUI } from '../actions/index';
import Vote from './Vote'

const Comment = ({ comment, dispatch }) => {
  return (
    <article className='post__container'>
      <Vote voteScore={ comment.voteScore || 0 } item_id={ comment.id } item_type='comments' item_parentId={ comment.parentId } />
      <div className='post__main'>
        <div>
          <h3>{ comment.author }&nbsp;–<span className='timestamp'>&nbsp;{ moment(comment.timestamp).fromNow() }</span></h3>
          <p>{ comment.body }</p>
        </div>
        <ul className='post__controls'>
          <li onClick={() => {
              dispatch(updateUI('editComment', comment))
            }}>
            <Link to='#commentForm'>
              <TiPencil />&nbsp;
              Edit
            </Link>
          </li>
          <li onClick={ () => {
            dispatch(deleteCommentAPI(comment.parentId, comment.id))
          }}>
            <TiTrash />&nbsp;
            Delete
          </li>
        </ul>
      </div>
    </article>
  )
}

export default connect()(Comment)


