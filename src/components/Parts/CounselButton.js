import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const CounselButton = ({}) => {
    return (
        <Link to="/counseling">
            <div className="button">
                まずは無料カウンセリングに参加
            </div>
        </Link>
    )
}
export default CounselButton;