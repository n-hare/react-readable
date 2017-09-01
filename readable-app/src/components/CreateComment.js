import React from 'react'
import { connect } from 'react-redux'
import { createComment} from '../actions/index';
import shortid from 'shortid'

class CreateComment extends React.Component {
    submitCommentForm = (evt) =>{
    evt.preventDefault();
    const { commentBody, commentAuthor } = this.commentForm,
    timestamp = Date.now(),
    id = shortid.generate();
    const commentDetails= {
      id: id,
      parentid: this.props.parentid,
      timestamp,
      body:commentBody.value,
      author:commentAuthor.value,
      voteScore: 0
    };
    this.commentForm.reset();
    this.props.dispatch(createComment(commentDetails));
  }

  render() {
    return (
      <form id='commentForm' className='post__form' ref={(commentForm) => {this.commentForm = commentForm}} onSubmit={(evt) => this.submitCommentForm(evt)} >
        <div className='post__form__row'>
          <label htmlFor='commentAuthor'>Author</label>
          <input type='text' name='commentAuthor' id='commentAuthor'/>
        </div>
        <div className='post__form__row'>
          <label htmlFor='commentBody' >Comment</label>
          <textarea name='body' id='commentBody'></textarea>
        </div>
        <div className='post__form__row'>
          <input type='submit' className='button__submit' value='Create Comment' />
        </div>
      </form>
    )
  }

}


export default connect()(CreateComment)