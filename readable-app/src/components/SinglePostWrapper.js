import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Post from './Post'

const SinglePostWrapper = (props) => {

  return (
    <div>
      <Post key={props.post_id} post={props.post} />
      <Link to='/' className='button__submit btn' >Back Home</Link>
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
