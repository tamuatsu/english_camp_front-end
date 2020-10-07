
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
    
const Counseling = ({onRouteChange}) => {
    return (
        <Switch>
            <Route path="/counseling">
                <div>
                    <h1 className="page_title counseling-title">
                        無料カウンセリング
                    </h1>
                    <section className="breadcrumbs">
                        <div className="container">
                            TOP ＞ 無料カウンセリング
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
                            <div className="row">
                                <div className="col-2-4">
                                    <img className="sp-feature1" src={special1} alt="" />
                                    <p>
                                        今のあなたの英語力とやるべきことがわかる<br />
                                        <span>英語力診断シート</span>
                                    </p>
                                    <img src={item1} alt="" />
                                </div>
                                <div className="col-2-4">
                                    <img className="sp-feature1" src={special2} alt="" />
                                    <p>
                                        誰でも英語が聴こえるようになる！<br />
                                        <span>リスニングメニュー解説シート</span>
                                    </p>
                                    <img src={item2} alt="" />
                                </div>
                            </div>
                            <div className="row ju-ce step-title">
                                ３ステップの簡単申し込み！
                            </div>
                            <div className="step-box">
                                <img src={step1} alt="" />
                                <h3 className="">ご希望カウンセリング場所のENGLISH CAMP公式LINEを登録</h3>
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
                            <div className="step-box">
                                <img src={step2} alt="" />
                                <h3 className="">簡単なプロフィール入力</h3>
                                <img src={stepi2} alt="" />
                                <p className="mt40">
                                    公式LINEを友達追加をして頂くと、<br />
                                    カウンセリング時に参考にさせて頂く簡単なアンケートが送られます。<br />
                                    アンケートのご記入とカウンセリング希望日時の提出をお願いします。
                                </p>
                            </div>
                            <div className="step-box">
                                <img src={step3} alt="" />
                                <h3 className="">実際にカウンセリングを行う</h3>
                                <div className="row ju-ce">
                                    <img class="left" src={reason7} alt="" />
                                    <img class="right" src={reason3} alt="" />
                                </div>
                                <p>
                                    担当者がカウンセリングを<br className="sp" />あなたの英語学習のお悩みを解決、<br />
                                    あなたに合った適切な学習方法の<br className="sp" />ご提案をします。<br />
                                    <br />
                                    （※希望者にはENGLISH CAMPのプログラム説明、無料体験レッスンのご案内を致します。）
                                </p>
                            </div>
                        </div>
                    </section>
                    <Question />
                </div>
            </Route>
        </Switch>
    );
}

export default Counseling;