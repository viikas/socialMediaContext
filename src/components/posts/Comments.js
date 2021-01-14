import React, { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';

const Comments = (props) => {
  const { state, dispatch } = useContext(AppContext);
 
  const onRemove = (comment) => {
    dispatch({ type: 'REMOVE_COMMENT', comment: comment })
  }

  return state.posts.length ? (
    <div className="post-list">
      <ul>
        {props.post.comments.map(comment => {
         return (  <div key={comment.id}>
            <li onClick={() => onRemove(comment)}>
              <div className="author">{comment.commentBy}</div>
              <div className="post">{comment.comment}</div>
            </li>
          </div> );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No Comments Available.:).</div>
  );
}

export default Comments;