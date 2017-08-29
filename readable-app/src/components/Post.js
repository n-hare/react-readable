import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { TiMessage, TiPencil, TiTag} from 'react-icons/lib/ti';
import Vote from './Vote'

const Post = ({post}) => {
  return (
    <article className='post__container'>
      <Vote voteScore={post.voteScore} post_id={post.id} />
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
            <TiMessage /> Comments
          </li>
          <li>
            <TiTag />&nbsp;
            <Link to={`/${post.category}`}>
              {post.category}
            </Link>
          </li>
          <li>
            <Link to={`/edit/${post.id}`}>
              <TiPencil />
              Edit
            </Link>
          </li>
        </ul>
      </div>
    </article>
  )
}

export default Post;
