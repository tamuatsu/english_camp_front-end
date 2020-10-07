
import React from 'react';
import '../First/First.css';
import special1 from '../../images/special1.svg';
import special2 from '../../images/special2.svg';
import item1 from '../../images/item1.png';
import item2 from '../../images/item2.png';
import step1 from '../../images/step1-com.png';
import step2 from '../../images/step2.png';
import step3 from '../../images/step3.png';
import reason7 from '../../images/reason7.png';
import reason3 from '../../images/reason3.png';
import stepi1 from '../../images/step1-img.png';
import stepi2 from '../../images/step2-img.svg';
import Question from '../Parts/Question';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";  
    
const Company = ({onRouteChange}) => {
    return (
        <Switch>
            <Route path="/company">
                <div>
                    <h1 className="page_title company-title">
                        会社概要
                    </h1>
                    <section className="breadcrumbs">
                        <div className="container">
                            TOP ＞ 会社概要
                        </div>
                    </section>
                    <section className="reasons company">
                        <div className="container sp-wi90">
                            <h2 className="company__title">会社概要</h2>
                            <p className="arial company__sub-title"><span>COMPANY</span></p>
                            <div className="company__box">
                                <h3 className="company__box__title">会社名</h3>
                                <p className="company__box__desc">株式会社PROGRESS</p>
                                <h3 className="company__box__title">住所</h3>
                                <p className="company__box__desc">東京都新宿区新宿五丁目10番6号　近代グループBLD.22号館2階B室</p>
                                <h3 className="company__box__title">資本金</h3>
                                <p className="company__box__desc">100万円</p>
                                <h3 className="company__box__title">事業内容</h3>
                                <p className="company__box__desc">英会話スクールの運営、通信教材による学習指導</p>
                            </div>
                        </div>
                    </section>
                </div>
            </Route>
        </Switch>
    );
}

export default Company;