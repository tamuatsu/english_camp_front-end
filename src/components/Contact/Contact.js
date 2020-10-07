
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
    
const Contact = ({onRouteChange}) => {
    return (
        <Switch>
            <Route path="/contact">
                <div>
                    <h1 className="page_title counseling-title">
                        お問い合わせ
                    </h1>
                    <section className="breadcrumbs">
                        <div className="container">
                            TOP ＞ お問い合わせ
                        </div>
                    </section>
                    <section className="reasons educa">
                        <div className="container sp-wi90">
                            <div className="reasons__box">
                                <p className="reasons__box__description sp-pa0">
                                    英語学習の悩みを全て解決！<br />
                                    プロのカウンセラーがあなたに合った英語学習の方法をお伝えします！<br />
                                    <br />
                                    <span>（※ENGLISH CAMPは無理な勧誘は致しません。）</span>
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="special">
                        <div className="container">
                            <div className="row ju-ce step-title">
                                お問い合わせは下記LINEで受け付けます
                            </div>
                            <div className="step-box">
                                <h3 className="">下記LINEよりお問い合わせください</h3>
                                <img src={stepi1} alt="" />
                                <div className="row ju-ce">
                                  <a href="https://line.me/R/ti/p/%40758pkjtf">
                                    東京
                                  </a>  
                                  <a href="https://line.me/R/ti/p/%40773gmqzj">
                                    名古屋
                                  </a>  
                                  <a href="">
                                    オンライン
                                  </a> 
                                </div>
                            </div>
                        </div>
                    </section>
                    <Question />
                </div>
            </Route>
        </Switch>
    );
}

export default Contact;