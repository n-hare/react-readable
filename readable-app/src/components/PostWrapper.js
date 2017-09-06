import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Post from './Post';
import Filters from './Filters'

import { getPosts } from '../actions/index';

class PostWrapper extends React.Component {
  componentDidMount(){
    this.props.dispatch(getPosts())
  }

  render(){
    return (
      <div>
        {this.props.posts.map(post=><Post key={post.id} post={post} commentTotal={0} />)}
        <Link to='/create' className='button__submit btn' >New Post</Link>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {

    // const arrPosts = Object.keys(state.posts).reduce((accu, key)=> {
    //   return [...accu, state.posts[key]]
    // },[])
  // let postArray = [];
  // if (Object.keys(state.posts !== undefined)){
  //   postArray = Object.keys(state.posts).reduce((accu, key)=>{
  //     return [...accu, state.posts[key]]
  //   })
  // }

    // const commentTotals = Object.keys(state.comments).reduce((prev, id)=> {
    //   prev[id]= Object.keys(state.comments[id]).length
    //   return prev
    // },{})
    return ({
      posts: Object.keys(state.posts).map(key=>state.posts[key]),
      ...props
    })
  }
/*
  if (this.props.match.params.category){
        currentPosts = currentPosts.filter((post) => (post.category === this.props.match.params.category) )
    }

        {[...this.props.posts].length > 0 ? <Filters category={this.props.match.params.category || ''} /> : '' }
        {currentPosts.length > 0 ? currentPosts.map(post => <Post key={post.id} post={post} commentTotal={this.props.commentTotals[post.id] || 0}/>) : <h2>Be the first to post {this.props.match.params.category ? `in ${this.props.match.params.category}`: ''}</h2>}
*/

export default connect(mapStateToProps)(PostWrapper);
