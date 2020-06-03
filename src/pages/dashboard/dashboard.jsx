import React, { useEffect } from 'react';
import Menu from '../../components/scrollmenu/scrollmenu'
import Header from '../../components/header/header'
import { withRouter } from "react-router";

import './dashboard.css'
function Dashboard(props) {
    useEffect(() => {
        let checkLogin = localStorage.getItem('token');
        if (!checkLogin) {
            props.history.push('/')
        }
    }, [])
    return (<div className="container">
        <div className="headingText">
            Learn what facinates you
        </div>
        <Header />
        <Menu />
    </div>)
}

export default withRouter(Dashboard);