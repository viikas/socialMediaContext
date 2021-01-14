import React, { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import PostDetails from './PostDetails';

const PostList = () => {
  const { state } = useContext(AppContext);
  return state.posts.length ? (
    <div className="post-list">
      <ul>
        {state.posts.map(post => {
          return (<PostDetails post={post} key={post.id} />);
        })}
      </ul>
    </div>
  ) : (
      <div className="empty">No Posts Available.:).</div>
    );
}

export default PostList;