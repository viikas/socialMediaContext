import React, { useContext } from 'react';

import { AppContext } from 'contexts/AppContext';


// Get Total Count
const getTotalCount = (posts, like = 'like') => {
  let count = 0;
  posts.length > 0 && posts.map(post => {
    if (like === 'like') {
      count = count + post.likes;
    } else if (like === 'dislike') {
      count = count + post.dislikes;
    } else {
      count = count + post.comments.length;
    }

  })
  return count;
}


// Get My Counts
const getMyCount = (loggedUser,posts, isPost = true) => {
  let count = 0;
  posts.length > 0 && posts.map(post => {
    if(loggedUser===post.postBy && isPost){
      count=count+1
    }else{
      post.comments.length > 0 && post.comments.map(comment => {
          if(comment.commentBy===loggedUser){
            count=count+1
          }
      })
    }
  })
  return count;
}

function HistoryDetails() {
  const { dispatch, state } = useContext(AppContext);
  const username=state.loggedUser.firstName+' '+state.loggedUser.lastName;
  return (
    <div className="App">
      My History
      <div className="history-list">
        <li>
          My Total Posts : {getMyCount(username, state.posts)}
        </li>
        <li>  My Total Comments : {getMyCount(username, state.posts, false)}
        </li>
      </div>


     All History
      <div className="history-list">
        <li>
          Total Posts : {state.posts.length}
        </li>
        <li>
          Total Likes : {getTotalCount(state.posts, 'like')}
        </li>
        <li>
          Total DisLikes : {getTotalCount(state.posts, 'dislike')}
        </li>
        <li>
          Total Comments : {getTotalCount(state.posts, 'comments')}
        </li>
      </div>
    </div>
  );
}

export default HistoryDetails;
