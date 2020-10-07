import React from 'react';
import interview3 from '../../images/interview3.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Voice3Button = ({}) => {
    return (
        <div className="interview__box">
            <img src={interview3} alt="English campスマートフォンアイコン"/>
            <Link to="/voice3">
                <div className="interview__box__poa">
                    <p>more</p>
                </div>
            </Link>
        </div>
    )
}
export default Voice3Button;