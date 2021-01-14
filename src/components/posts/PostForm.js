import React, { useContext, useState } from 'react';
import { AppContext } from 'contexts/AppContext';

const PostForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [postContent, setPostContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    var d = new Date();
    let post = {
      id: d.getTime(),
      post: postContent,
      likes: 0,
      dislikes: 0,
      postBy: state.loggedUser.firstName + ' ' + state.loggedUser.lastName,
      comments: []
    }
    dispatch({ type: 'ADD_POST', post: post });
    setPostContent('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea className="post-input" type="text" placeholder="Post" value={postContent}
        onChange={(e) => setPostContent(e.target.value)} required rows="4" cols="70" />
      <input type="submit" value="add post" />
    </form>
  );
}

export default PostForm;