import React from 'react';
import '../First/First.css';
import Voice1Button from '../Parts/Voice1Button';
import Voice2Button from '../Parts/Voice2Button';
import Voice3Button from '../Parts/Voice3Button';
import VoicesButton from '../Parts/VoicesButton';
import interview from '../../images/interview-title.png';
import spinterview from '../../images/sp-interview-title.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Interview = ({}) => {
    return (
        <section className="interview">
            <div className="container">
                <img className="pc" src={interview} alt="English campスマートフォンアイコン"/>
                <img className="sp" src={spinterview} alt="English campスマートフォンアイコン"/>
                <div className="pc">
                    <div className="row spa-be">
                        <Voice1Button />
                        <Voice2Button />
                        <Voice3Button />
                    </div>
                </div>
                <div className="sp">
                    <div className="row spa-be">
                        <Voice1Button />
                        <Voice2Button />
                    </div>
                </div>
                <VoicesButton />
            </div>
        </section>
    );
}

export default Interview;