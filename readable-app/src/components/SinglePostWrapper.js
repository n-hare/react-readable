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
        {post && !post.deleted ?  <Post key={this.props.post_id} post={this.props.post} /> : ''}

        <Link to='/' className='btn' >Back Home</Link>
        <h2 id='commets'>Comments</h2>
        { this.props.comments.length > 0 ? this.props.comments.map(comment => <Comment comment={comment} key={comment.id} />) : <h3>Be the first to comment!</h3>}
        <CreateComment parentid={this.props.post_id}/>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return ({
    post: state.posts[props.post_id],
    comments: state.comments[props.post_id] ? Object.keys(state.comments[props.post_id])
      .map(key=>state.comments[props.post_id][key])
      .filter(comment => !comment.deleted && !comment.parentDeleted) : [] ,
    ...props
  })
}


export default connect(mapStateToProps)(SinglePostWrapper);
