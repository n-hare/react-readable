import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import Post from './Post'
import CreateComment from './CreateComment'
import Comment from './Comment'

class SinglePostWrapper extends React.Component {
  componentDidMount() {
    if (!this.props.post) {
      this.props.dispatch(push('/'))
    }
  }
  render() {
    const {post} = this.props
    return (
      <div>
        {post && !post.deleted ?  <Post key={this.props.post_id} post={this.props.post} commentTotal={this.props.commentTotal} /> : ''}

        <Link to='/' className='btn' >Back Home</Link>
        <h2>Comments</h2>
        <CreateComment parentid={this.props.post_id}/>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {

  return ({
    post: state.posts[props.post_id],
    comments: state.comments[props.post_id],
    commentTotal: props.post_id in state.comments ? Object.keys(state.comments[props.post_id]).length : 0,
    ...props
  })
}

export default connect(mapStateToProps)(SinglePostWrapper);
