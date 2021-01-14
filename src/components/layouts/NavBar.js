import React, { useContext } from 'react';
import { withRouter, Link } from "react-router-dom";

import { AppContext } from 'contexts/AppContext';

const NavBar = (props) => {
  const { state, dispatch } = useContext(AppContext);

  const onSignOut = () => {
    dispatch({ type: 'SIGNOUT', user: null });
    localStorage.removeItem('authorUser');
    props.history.push("/signin");
  }

  return (
    <div className="navigations">
      <div className="posts-buttons">
        <Link to="/"> <button  >Home</button></Link>
        <Link to="/history"> <button  >History</button></Link>
        <button >{state.loggedUser && state.loggedUser.firstName + ' ' + state.loggedUser.lastName}</button>
        <button onClick={() => onSignOut()}>Sign Out</button>
      </div>
    </div>
  );
}

export default withRouter(NavBar);