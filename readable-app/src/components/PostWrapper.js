import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Post from './Post';
import Filters from './Filters'
import { getPosts } from '../actions/index'

class PostWrapper extends React.Component {
  componentDidMount() {
    this.props.dispatch(getPosts())
  }

  render() {
    let { posts } = this.props
    const paramCategory  = this.props.match.params.category
    if (paramCategory && posts.length){
      posts = posts.filter( post => post.category === this.props.match.params.category )
    }
    return (
      <div>
        {posts.length > 0 || paramCategory ? <Filters params={ this.props.match.params.category || '' } categories={ this.props.categories } /> : '' }
        {posts.length > 0 ? posts.map(post=><Post key={post.id} post={post} commentTotal={0} />) : <h2>Be the first to post{paramCategory ? ` in ${paramCategory}`: '' }!</h2>}
        <Link to='/create' className='button__submit btn' >New Post</Link>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
    return ({
      categories: [{name: 'all', path: ''}, ...state.categories],
      posts: Object.keys(state.posts).map(key=>state.posts[key]).filter(post => !post.deleted),
      ...props
    })
  }


export default connect(mapStateToProps)(PostWrapper);
