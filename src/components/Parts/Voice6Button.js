import React from 'react';
import voice6 from '../../images/voice6.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Voice6Button = ({}) => {
    return (
        <div className="interview__box">
            <img src={voice6} alt="English campスマートフォンアイコン"/>
            <Link to="/voice6">
                <div className="interview__box__poa">
                    <p>more</p>
                </div>
            </Link>
        </div>
    )
}
export default Voice6Button;