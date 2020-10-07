import React from 'react';
import '../First/First.css';
import Voice1Button from '../Parts/Voice1Button';
import Voice2Button from '../Parts/Voice2Button';
import Voice3Button from '../Parts/Voice3Button';
import Voice4Button from '../Parts/Voice4Button';
import Voice5Button from '../Parts/Voice5Button';
import Voice6Button from '../Parts/Voice6Button';
import Voice7Button from '../Parts/Voice7Button';
import CounselButton from '../Parts/CounselButton';
import Counser from '../../images/counsering.png';
import Counsersp from '../../images/counsel-title.png';
import counsel from '../../images/counsel.png';
import Question from '../Parts/Question';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Voices = ({}) => {
    return (
        <Switch>
            <Route path="/voices">
                <div>
                    <h1 className="page_title voices">
                        受講生の声
                    </h1>
                    <section className="breadcrumbs">
                        <div className="container">
                            TOP ＞ 受講生の声
                        </div>
                    </section>
                    <section className="voice-section">
                        <div className="container sp-wi90">
                            <div className="row spa-be wrap">
                                <Voice1Button />
                                <Voice2Button />
                                <Voice3Button />
                                <Voice4Button />
                                <Voice5Button />
                                <Voice6Button />
                                <Voice7Button />
                            </div>
                        </div>
                    </section>
                    <section className="counseling">
                        <div className="container sp-wi90">
                            <img className="pc" src={Counser} alt="" />
                            <img className="sp" src={Counsersp} alt="" />
                            <img src={counsel} alt="" className="counsel" />
                            <p className="mb40">
                                英語学習の悩みを全て解決！<br />
                                プロのアドバイザーがあなたに合った英語学習の方法をお伝えします！
                            </p>
                        </div>
                        <CounselButton />
                    </section>
                    <Question />
                </div>
            </Route>
        </Switch>
    );
}

export default Voices;