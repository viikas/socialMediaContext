import React, { useContext, useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";

import { AppContext } from 'contexts/AppContext';


import NavBar from 'components/layouts/NavBar';
import HistoryDetails from 'components/historyDetails';

function History(props) {

    const { state, dispatch } = useContext(AppContext);
    useEffect(() => {
        if (!state.loggedUser || (!state.loggedUser.firstName && !state.loggedUser.lastName)) {
            props.history.push("/signin");
        }
    }, [state.loggedUser]);

    return (
        <>
            <NavBar />
            <HistoryDetails />
        </>
    );
}

export default withRouter(History);
