import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Post from './Post';
import Filters from './Filters'

const PostWrapper = (props) => {
  let currentPosts  = [...props.posts];
  if (props.match.params.category){
      currentPosts = currentPosts.filter((post) => (post.category === props.match.params.category) )
  }
  return (
    <div>
      {[...props.posts].length > 0 ? <Filters category={props.match.params.category || ''} /> : '' }
      {currentPosts.length > 0 ? currentPosts.map(post => <Post key={post.id} post={post} commentTotal={props.commentTotals[post.id] || 0}/>) : <h2>Be the first to post {props.match.params.category ? `in ${props.match.params.category}`: ''}</h2>}
      <Link to='/create' className='button__submit btn' >New Post</Link>
    </div>
  )
}

const mapStateToProps = (state, props) => {

  const arrPosts = Object.keys(state.posts).reduce((accu, key)=> {
    return [...accu, state.posts[key]]
  },[]).filter((post) => (post.deleted === false) );

  const commentTotals = Object.keys(state.comments).reduce((prev, id)=> {
    prev[id]= Object.keys(state.comments[id]).length
    return prev
  },{})
  return ({
    posts: arrPosts,
    commentTotals,
    ...props
  })
}

export default connect(mapStateToProps)(PostWrapper);
