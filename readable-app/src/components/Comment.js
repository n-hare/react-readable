import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { TiPencil, TiTrash} from 'react-icons/lib/ti'

import Vote from './Vote'

const Comment = (props) => {
  return (
    <article className='post__container'>
      <Vote voteScore={props.comment.voteScore || 0} comment_id={props.comment.id} />
      <div className='post__main'>
        <div>
          <h3>{props.comment.author} –<span>{moment(props.comment.timestamp).fromNow()}</span></h3>
          <p>{props.comment.body}</p>
        </div>
        <ul className='post__controls'>
          <li>
            <Link to={'#commentForm'}>
              <TiPencil />&nbsp;
              Edit
            </Link>
          </li>
          <li onClick={()=>{
            console.log('delete comment')
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
