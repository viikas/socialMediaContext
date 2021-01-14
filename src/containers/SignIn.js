import React, { useContext, useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";

import { AppContext } from '../contexts/AppContext';


const SignIn = (props) => {
    const { state, dispatch } = useContext(AppContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'SIGNIN', user: { firstName, lastName } });
        setFirstName('');
        setLastName('');
    }

    useEffect(() => {
        if (state.loggedUser && state.loggedUser.firstName && state.loggedUser.lastName) {
            props.history.push("/");
        }
    }, [state.loggedUser]);

    useEffect(() => {
        localStorage.setItem('authorUser', JSON.stringify(state.loggedUser));
    }, [state.loggedUser]);

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" value={firstName}
                onChange={(e) => setFirstName(e.target.value)} required />
            <input type="text" placeholder="Last Name" value={lastName}
                onChange={(e) => setLastName(e.target.value)} required />
            <input type="submit" value="Sign In" />
        </form>
    );
}

export default withRouter(SignIn);