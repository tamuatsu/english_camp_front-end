import React from 'react';
import interview2 from '../../images/interview2.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Voice2Button = ({}) => {
    return (
        <div className="interview__box">
            <img src={interview2} alt="English campスマートフォンアイコン"/>
            <Link to="/voice2">
                <div className="interview__box__poa">
                    <p>more</p>
                </div>
            </Link>
        </div>
    )
}
export default Voice2Button;