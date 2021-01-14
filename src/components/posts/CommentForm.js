import React, { useContext, useState } from 'react';
import { AppContext } from '../../contexts/AppContext';

const CommentForm = (props) => {
  const { state, dispatch } = useContext(AppContext);
  const [commentContent, setCommentContent] = useState('');

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    var d = new Date();
    let comment = {
      id: d.getTime(),
      post_id: props.post.id,
      comment: commentContent,
      commentBy: state.loggedUser.firstName + ' ' + state.loggedUser.lastName,
    }
    dispatch({ type: 'ADD_COMMENT', comment: comment });
    setCommentContent('');
    props.setShowCommentForm(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea className="post-input" type="text" placeholder="Comment" value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)} required rows="4" cols="65" />
      <input type="submit" value="Add Comment" />
    </form>
  );
}

export default CommentForm;