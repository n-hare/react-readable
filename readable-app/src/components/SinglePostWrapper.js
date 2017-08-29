import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Post from './Post'
import CreateComment from './CreateComment'

const SinglePostWrapper = (props) => {

  return (
    <div>
      <Post key={props.post_id} post={props.post} />
      <Link to='/' className='btn' >Back Home</Link>
      <CreateComment />
    </div>
  )
}

const mapStateToProps = (state, props) => {

  return ({
    post: state.posts[props.post_id],
    ...props
  })
}

export default connect(mapStateToProps)(SinglePostWrapper);
