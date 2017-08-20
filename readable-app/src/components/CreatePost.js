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
        <form onSubmit={(evt) => this.submitPostForm(evt) } ref={(postForm) => {this.postForm = postForm}}>
          <label>Title:&nbsp;</label>
          <input type='text' name='title' />
          <label>Post:&nbsp;</label>
          <textarea name='body' ></textarea>
          <label>Author:&nbsp;</label>
          <input type='text' name='author' />
          <label>Category:&nbsp;</label>
          <select name='category' >
            <option value='A'>A</option>
            <option value='B'>B</option>
            <option value='C'>C</option>
          </select>
          <input type='submit' value={`${this.props.title} Post`} />
        </form>
      </div>
    )
  }
}

export default CreatePost;