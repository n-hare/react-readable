import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Post from './Post'
import CreateComment from './CreateComment'
import Comment from './Comment'

const SinglePostWrapper = (props) => {
  return (
    <div>
      <Post key={props.post_id} post={props.post} commentTotal={props.commentTotal} />
      <Link to='/' className='btn' >Back Home</Link>
      <h2>Comments</h2>
      <CreateComment parentid={props.post_id}/>
    </div>
  )
}

const mapStateToProps = (state={}, props) => {

  return ({
    post: state.posts[props.post_id],
    comments: state.comments[props.post_id],
    commentTotal: props.post_id in state.comments ? Object.keys(state.comments[props.post_id]).length : 0,
    ...props
  })
}

export default connect(mapStateToProps)(SinglePostWrapper);
