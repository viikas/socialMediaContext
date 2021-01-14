import React, { useContext, useState } from 'react';
import { AppContext } from 'contexts/AppContext';
import CommentForm from './CommentForm';
import Comments from './Comments';

const PostDetails = ({ post }) => {
  const { dispatch } = useContext(AppContext);
  const [showCommentForm, setShowCommentForm] = useState(false);
  
  // On Remove Post 
  const onRemove = (post) => {
    dispatch({ type: 'REMOVE_POST', id: post.id })
  }

  // On Like Post
  const onLike = (post) => {
    dispatch({ type: 'LIKE_POST', id: post.id })
  }
  // on Dislike Post
  const onDislike = (post) => {
    dispatch({ type: 'DISLIKE_POST', id: post.id })
  }

  return (
    <div>
      <li onClick={() => onRemove(post)}>
        <div className="author">{post.postBy}</div>
        <div className="post">{post.post}</div>
      </li>
      <div className="posts-buttons">
        <button onClick={() => setShowCommentForm(!showCommentForm)} >{post.comments.length} Comments</button>
        <button onClick={() => onLike(post)}>{post.likes} Likes</button>
        <button onClick={() => onDislike(post)}>{post.dislikes} Dislikes</button>
      </div>
      { showCommentForm &&
        <CommentForm post={post} setShowCommentForm={setShowCommentForm} />
      }
      <Comments post={post} />
      <hr />
    </div>

  );
}

export default PostDetails;