import React from 'react';
import voice5 from '../../images/voice5.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Voice5Button = ({}) => {
    return (
        <div className="interview__box">
            <img src={voice5} alt="English campスマートフォンアイコン"/>
            <Link to="/voice5">
                <div className="interview__box__poa">
                    <p>more</p>
                </div>
            </Link>
        </div>
    )
}
export default Voice5Button;