import React from 'react'


const CreateComment = (props) => {

  return (
    <form id='commentForm' className='post__form' ref={(commentForm) => {this.commentForm = commentForm}}>
      <div className='post__form__row'>
        <label htmlFor='commentAuthor'>Author</label>
        <input type='text' name='commentAuthor' id='commentAuthor'/>
      </div>
      <div className='post__form__row'>
        <label htmlFor='commentBody' >Comment</label>
        <textarea name='body' id='postBody'></textarea>
      </div>
      <div className='post__form__row'>
        <input type='submit' className='button__submit' value='Create Comment' />
      </div>
    </form>
  )
}

export default CreateComment