import React from 'react';
import shortid from 'shortid';

import { createPost } from '../actions/index';
import { connect } from 'react-redux';
class CreatePost extends React.Component {


  submitPostForm = (evt) =>{
    evt.preventDefault();
    const { title, body, author, category } = this.postForm,
    timestamp = Date.now(),
    id = shortid.generate();
    const postDetails= {
      id: this.props.post.id || id,
      timestamp,
      title: title.value,
      body:body.value,
      author:author.value,
      category:category.value,
      voteScore:  this.props.post.voteScore || 0
    };
    this.postForm.reset();
    this.props.dispatch(createPost(postDetails));
    this.props.push('/');
  }

  render() {
    const {post} = this.props
    return (
      <div>
        <h2>{this.props.title} Post</h2>
        <form className='post__form' onSubmit={(evt) => this.submitPostForm(evt) } ref={(postForm) => {this.postForm = postForm}}>
          <div className='post__form__row'>
            <label htmlFor='title'>Title</label>
            <input type='text' name='title' id='title' defaultValue={post.title || ''}/>
          </div>
          <div className='post__form__row'>
            <label htmlFor='postBody' >Post</label>
            <textarea name='body' id='postBody' defaultValue={post.body || ''}></textarea>
          </div>
          <div className='post__form__row'>
            <label htmlFor='author' >Author</label>
            <input type='text' name='author' id='author' defaultValue={post.author || ''}/>
          </div>
          <div className='post__form__row'>
            <label htmlFor='category' >Category</label>
            <select name='category' id='category' defaultValue={post.category || 'react'}>
              <option value='React' >react</option>
              <option value='Redux'>redux</option>
              <option value='Udacity'>udacity</option>
            </select>
          </div>
          <div className='post__form__row'>
            <input type='submit' className='button__submit' value={`${this.props.title} Post`} />
          </div>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state, props) => {

  return ({
    post: state.posts[props.post_id] || '',
    ...props
  })
}

export default connect(mapStateToProps)(CreatePost);

