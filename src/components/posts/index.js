import React from 'react';
import PostList from './PostList';
import PostForm from './PostForm';

function Posts() {
  return (
    <div className="App">
      {/* <AppContextProvider> */}
        <PostForm/>
        <PostList/>
        
      {/* </AppContextProvider> */}
    </div>
  );
}

export default Posts;
