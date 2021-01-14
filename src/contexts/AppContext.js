import React, { createContext, useReducer, useEffect } from 'react';
import { appReducer } from '../reducers/appReducer';

export const AppContext = createContext();
const localData = localStorage.getItem('posts');
const localLoggedUser = localStorage.getItem('authorUser');

const initialState = {
  posts: localData ? JSON.parse(localData) : [],
  post: {},
  loggedUser: localLoggedUser ? JSON.parse(localLoggedUser) : null,
}

const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(state.posts));
  }, [state.posts]);


  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;