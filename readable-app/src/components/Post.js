import React from 'react';
import { TiMessage, TiPencil, TiTag} from 'react-icons/lib/ti'

const Post = (props) => {
  return (
    <article className='post__container'>
     <div>
        <h2>Title</h2>
        <p>author– timestamp</p>
        <p>Body</p>
      </div>
      <ul className='post__controls'>
        <li><TiMessage /> Comments</li>
        <li><TiTag /> Category</li>
        <li><TiPencil /> Edit</li>
      </ul>
    </article>
  )
}

export default Post;
