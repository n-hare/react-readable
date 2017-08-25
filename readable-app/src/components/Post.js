import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { TiMessage, TiPencil, TiTag} from 'react-icons/lib/ti';
import Vote from './Vote'

const Post = ({post}) => {
  return (
    <article className='post__container'>
      <Vote voteScore={post.voteScore} />
      <div className='post__main'>
        <div>
          <h2>{post.title}</h2>
          <p>{`${post.author}– ${moment(post.timestamp).fromNow()}`}</p>
          <p>{post.body}</p>
        </div>
        <ul className='post__controls'>
          <li>
            <TiMessage /> Comments
          </li>
          <li>
            <TiTag />
            <Link to={`/${post.category}`}>
              {post.category}
            </Link>
          </li>
          <li>
            <TiPencil /> Edit
          </li>
        </ul>
      </div>
    </article>
  )
}

export default Post;
