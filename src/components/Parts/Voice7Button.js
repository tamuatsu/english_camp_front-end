import React from 'react';
import voice7 from '../../images/voice7.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Voice7Button = ({}) => {
    return (
        <div className="interview__box">
            <img src={voice7} alt="English campスマートフォンアイコン"/>
            <Link to="/voice7">
                <div className="interview__box__poa">
                    <p>more</p>
                </div>
            </Link>
        </div>
    )
}
export default Voice7Button;