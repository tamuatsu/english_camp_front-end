import React from 'react';
import interview1 from '../../images/interview1.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Voice1Button = ({}) => {
    return (
        <div className="interview__box">
            <img src={interview1} alt="English campスマートフォンアイコン"/>
            <Link to="/voice1">
                <div className="interview__box__poa">
                    <p>more</p>
                </div>
            </Link>
        </div>
    )
}
export default Voice1Button;