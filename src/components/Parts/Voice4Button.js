import React from 'react';
import voice4 from '../../images/voice4.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Voice4Button = ({}) => {
    return (
        <div className="interview__box">
            <img src={voice4} alt="English campスマートフォンアイコン"/>
            <Link to="/voice4">
                <div className="interview__box__poa">
                    <p>more</p>
                </div>
            </Link>
        </div>
    )
}
export default Voice4Button;