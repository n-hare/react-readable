import React from 'react';
import shortid from 'shortid';

class CreatePost extends React.Component {

  submitPostForm = (evt) =>{
    evt.preventDefault();
    const { title, body, author, category } = this.postForm,
    timestamp = Date.now(),
    id = shortid.generate();
    const postDetails= {
      id,
      timestamp,
      title: title.value,
      body:body.value,
      author:author.value,
      category:category.value,
      voteScore:  this.props.post || 0
    };
    this.postForm.reset();
  }


  render() {
    return (
      <div>
        <h2>{this.props.title} Post</h2>
        <form className='post__form' onSubmit={(evt) => this.submitPostForm(evt) } ref={(postForm) => {this.postForm = postForm}}>
          <div className='post__form__row'>
            <label htmlFor='title' >Title</label>
            <input type='text' name='title' id='title' />
          </div>
          <div className='post__form__row'>
            <label htmlFor='postBody' >Post</label>
            <textarea name='body' id='postBody' ></textarea>
          </div>
          <div className='post__form__row'>
            <label htmlFor='author' >Author</label>
            <input type='text' name='author' id='author' />
          </div>
          <div className='post__form__row'>
            <label htmlFor='category' >Category</label>
            <select name='category' id='category' >
              <option value='react'>react</option>
              <option value='redux'>redux</option>
              <option value='udacity'>udacity</option>
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

export default CreatePost;