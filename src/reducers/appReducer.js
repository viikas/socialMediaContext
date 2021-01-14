

export const appReducer = (state, action) => {
  switch (action.type) {
    case 'SIGNIN': {
      return {
        ...state,
        loggedUser: action.user
      }
    }
    case 'SIGNOUT': {
      return {
        ...state,
        loggedUser: action.user
      }
    }


    case 'ADD_POST': {
      return {
        ...state,
        posts: [action.post, ...state.posts,]
      }
    }

    case "REMOVE_POST": {
      const _id = action.id;
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== _id),
      };
    }

    case "LIKE_POST": {
      const _id = action.id;
      return {
        ...state,
        posts: state.posts.map(item => {
          if (item.id === _id) {
            item.likes ++;
          }
          return item;
        })
      };
    }

    case "DISLIKE_POST": {
      const _id = action.id;
      return {
        ...state,
        posts: state.posts.map(item => {
          if (item.id === _id) {
            item.dislikes ++;
          }
          return item;
        })
      };
    }



    case 'ADD_COMMENT': {
      const post_id = action.comment.post_id;
      const comment = action.comment;
      return {
        ...state,
        posts: state.posts.map(item => {
          if (item.id === post_id) {
            item.comments = [comment, ...item.comments,]
          }
          return item;
        })
      }
    }

    case 'REMOVE_COMMENT': {
      const post_id = action.comment.post_id;
      const comment_id = action.comment.id;
      return {
        ...state,
        posts: state.posts.map(item => {
          if (item.id === post_id) {
            item.comments = item.comments.filter((item) => item.id !== comment_id)
          }
          return item;
        })
      }
    }




    default:
      return state;
  }
} 