import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const VoicesButton = ({}) => {
    return (
        <Link to="/voices">
            <div className="button">
                受講生の声をもっと見る
            </div>
        </Link>
    )
}
export default VoicesButton;