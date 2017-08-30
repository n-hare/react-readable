import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Post from './Post'
import CreateComment from './CreateComment'
import Comment from './Comment'

const SinglePostWrapper = (props) => {

  return (
    <div>
      <Post key={props.post_id} post={props.post} />
      <Link to='/' className='btn' >Back Home</Link>
      <Comment />
      <CreateComment />
    </div>
  )
}

const mapStateToProps = (state={}, props) => {

  return ({
    post: state.posts[props.post_id],
    comments: state.comments[props.post_id],
    ...props
  })
}

export default connect(mapStateToProps)(SinglePostWrapper);
