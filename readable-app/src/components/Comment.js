import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { TiPencil, TiTrash} from 'react-icons/lib/ti'
import { deleteComment, updateUI } from '../actions/index';
import Vote from './Vote'

const Comment = ({comment, dispatch}) => {
  return (
    <article className='post__container'>
      <Vote voteScore={ comment.voteScore || 0 } comment_id={ comment.id } />
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
            dispatch(deleteComment(comment.parentid, comment.id))
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
