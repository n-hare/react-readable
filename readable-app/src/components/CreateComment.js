import React from 'react'
import shortid from 'shortid'
import { connect } from 'react-redux'
import { createComment, updateUI } from '../actions/index'
import { postData } from '../utils/apiHelpers'


class CreateComment extends React.Component {


  submitCommentForm = (evt) =>{
    evt.preventDefault();
    const { commentBody, commentAuthor } = this.commentForm,
    timestamp = Date.now(),
    id = this.props.editComment.id || shortid.generate()
    const commentDetails= {
      id: id,
      parentId: this.props.parentId,
      timestamp,
      body:commentBody.value,
      author:commentAuthor.value,
      voteScore: this.props.editComment.voteScore || 0
    };
    this.commentForm.reset()
    postData('/comments', JSON.stringify(commentDetails))
    this.props.dispatch(createComment(commentDetails))
    this.props.dispatch(updateUI('editComment', {} ))
  }

  componentDidMount() {
    this.commentForm.reset() //won't display defaultValue without a reset
  }

  componentWillUnmount() {
    this.commentForm.reset()
    this.props.dispatch(updateUI('editComment', {} ))
  }
  render() {
    return (
      <form id='commentForm' className='post__form' ref={ (commentForm) => {this.commentForm = commentForm}} onSubmit={ (evt) => this.submitCommentForm(evt) } >
        <div className='post__form__row'>
          <label htmlFor='commentAuthor'>Author</label>
          <input type='text' name='commentAuthor' id='commentAuthor' defaultValue={ this.props.editComment.author || '' } required />
        </div>
        <div className='post__form__row'>
          <label htmlFor='commentBody'>Comment</label>
          <textarea name='body' id='commentBody' defaultValue={ this.props.editComment.body || '' } required></textarea>
        </div>
        <div className='post__form__row'>
          <input type='submit' className='button__submit' value='Create Comment' />
        </div>
      </form>
    )
  }

}

const mapStateToProps = (state, props) => {

  return ({
    editComment: state.ui.editComment,
    ...props
  })
}

export default connect(mapStateToProps)(CreateComment)