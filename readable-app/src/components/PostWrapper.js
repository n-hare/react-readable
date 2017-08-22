import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Post from './Post';

const PostWrapper = (props) => {
  let { posts } = props;
  if (props.match.params.category){
      posts = posts.filter((post) => (post.category === props.match.params.category) )
  }
  return (
    <div>
      <h2>Showing: {props.match.params.category ? props.match.params.category : 'all'}</h2>
       {props.posts.length > 0 ? <button>All</button> posts.map(post => <Post key={post.id} post={post} />) : <h3>Be the first to post</h3>}
      <Link to='/create' className='button__submit' >New Post</Link>
    </div>
  )
}

const mapStateToProps = (state, props) => {

  const arrPosts = Object.keys(state.posts).reduce((accu, key)=>{
    return [...accu, state.posts[key]]
  },[]);
  return ({
    posts: arrPosts,
    ...props
  })
}

export default connect(mapStateToProps)(PostWrapper);
