import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import { TiMessage, TiPencil, TiTag, TiTrash} from 'react-icons/lib/ti'
import { deletePostAPI } from '../actions/index';
import Vote from './Vote'

const Post = ({dispatch, post, commentTotal}) => {
  return (
    <article className='post__container'>
      <Vote voteScore={post.voteScore || 0} post_id={post.id} />
      <div className='post__main'>
        <div>
          <Link to={`/${post.category}/${post.id}`} className='post__title'>
            <h2>{post.title}</h2>
          </Link>
          <p>{`${post.author}– ${moment(post.timestamp).fromNow()}`}</p>
          <p>{post.body}</p>
        </div>
        <ul className='post__controls'>
          <li>
            <Link to={`/${post.category}/${post.id}`}>
              <TiMessage />&nbsp;{commentTotal === 1 ? `${commentTotal} Comment` : `${commentTotal} Comments` }
            </Link>
          </li>
          <li>
            <TiTag />&nbsp;
            <Link to={`/${post.category}`}>
              {post.category}
            </Link>
          </li>
          <li>
            <Link to={`/edit/${post.id}`}>
              <TiPencil />&nbsp;
              Edit
            </Link>
          </li>
          <li onClick={()=>{
            dispatch(deletePostAPI(post.id))
            dispatch(push('/'))

          } }>
            <TiTrash />&nbsp;
            Delete
          </li>
        </ul>
      </div>
    </article>
  )
}

export default connect()(Post);
